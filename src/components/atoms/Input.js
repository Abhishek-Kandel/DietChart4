import React from "react";

const Input = ({ name, type, value, onChange }) => {
  return (
    <input type={type} value={value} name={name} onChange={onChange} required />
  );
};

export default Input;
