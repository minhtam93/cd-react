import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const ErrorMessage = styled.p`
    color: red;
    white-space: nowrap;
  `

export default function Input({ label, required, placeholder, onChange, error }) {
  console.log(error)
  return (
    <label>
      <p>
        {label}
        {required && <span>*</span>}
      </p>
      <div className="input-wrap" style={{width:"100%"}}>
        <input style={{width:"100%"}} type="text" placeholder={placeholder} onChange={onChange} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </label>
  );
}
