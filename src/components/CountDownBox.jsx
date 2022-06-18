import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function CountDownBox() {
  const [number, setNumber] = useState(0);
  //   useEffect(() => {
  //      const countUp = setInterval(()=> {
  //             setNumber((pre)=> pre +1)
  //       },1000)
  //       return () => {
  //   clearInterval(countUp);
  //       }
  //   }, [])

  useEffect(() => {
    if (number < 30) {
      const countUp = setTimeout(() => {
        setNumber(number + 1);
      }, 1000);
      return () => {
        clearTimeout(countUp);
      };
    }
  }, [number]);

  useEffect(() => {
    const handleScroll = window.addEventListener("scroll", () => {
      const box = document.querySelector("#box");
      let position = box.getBoundingClientRect();
      if (position.y < 300) {
        box.classList.add("fade-in");
      } else {
        box.classList.remove("fade-in");
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  return (
    <CountBoxWrap id="box">
      <button onClick={decrementNumber}>-</button>
      <span>{number}</span>
      <button onClick={incrementNumber}>+</button>
    </CountBoxWrap>
  );
}
const CountBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 180px;
  height: 180px;
  background: orange;
  transform: translateY(-100px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.59, 0.83, 0.67);
  &.fade-in {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.59, 0.83, 0.67);
  }
  button {
    width: 35px;
    height: 35px;
    display: inline-block;
  }
`;
