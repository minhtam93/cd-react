import React, { useContext, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { createContext } from "react";
import { ClassNames } from "@emotion/react";

const AccorditionContent = styled.div`
  display: block !important;
`;

export default function Accordion({ title, date, children, index , isOpen, onClick}) {
  const [_isOpen, setIsOpen] = useState(false)
  const { activeContext, onActive } = useContext(Context)
  const active = isOpen || (activeContext === index) || _isOpen;
  console.log(active)
  const _onClick = onClick || (() => {
    if (typeof index !== "undefined") {
      onActive(index);
    } else {
      setIsOpen(!_isOpen);
    }
  });
  
  return (

      <div className={classNames("accordion", { active })}>
        <div className="accordion__title" onClick={_onClick}>
          <div className="date">Ngày {date}</div>
          <h3>{title}</h3>
        </div>
        {active && <AccorditionContent className="content">
            {children}
          </AccorditionContent>
        }
      </div>
  
  );
}

const Context = createContext({ activeContext: -1});

Accordion.Group = ({ children }) => {
  const [activeContext, setActiveContext] = useState();
  const onActive = (i) => {setActiveContext(i === activeContext ? -1 : i)}
  return (
    <Context.Provider value={{ activeContext, onActive }}>
       {
            React.Children.map(children, (child, i) => React.cloneElement(child, { index: i }))
        }
    </Context.Provider>
  )
}
