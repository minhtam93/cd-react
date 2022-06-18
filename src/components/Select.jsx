import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { ErrorMessage } from "./Input";

const SelectSub = styled.div`
  &.active {
    display: block !important;
  }
`;

export default function Select({ label, options, placeholder, error, onChange }) {
  const [value, setValue] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setIsOpen(false);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const onClick = (ev) => {
    ev.stopPropagation();
    setIsOpen(true);
  };
  const onSelect = (ev,val)=> {
      ev.preventDefault()
      setValue(val)
      onChange?.(val)
  }

  return (
    <label>
      <p>{label}</p>
      <div className="input-wrap" style={{width: '100%'}}>
          <div className="select">
        <div className="head" onClick={onClick}>
          {value}
        </div>
        <SelectSub className={`sub ${isOpen ? "active" : ""}`}>
          {options.map((e) => (
            <a key={e} href="#" onClick={(ev)=> onSelect(ev,e)}>
              {e}
            </a>
          ))}
        </SelectSub>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
      
    </label>
  );
}
