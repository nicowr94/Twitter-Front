import React from "react";
import "./InputForm.css";

export default function InputForm({ name, type, text, autofocus, callback }) {
  return (
    <div className="form-group">
      <input
        type={type}
        id={name}
        name={name}
        required
        autofocus={autofocus}
        onChange={(e) => callback(e.target.value, name)}
      />
      <label>{text}</label>
      <span className="line"></span>
    </div>
  );
}
