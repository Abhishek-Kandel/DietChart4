import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const InputField = ({ text, name, type, value, onChange }) => {
  return (
    <div className="input-field">
      <Label text={text} />
      <Input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
