import React from "react";
import "./InputForm.css";

export default function InputForm({ name, type }) {
  return (
    <div class="form-group">
      <input type={type} id="id" required autofocus />
      <label for="id">{name}</label>
      <span class="line"></span>
    </div>
  );
}
