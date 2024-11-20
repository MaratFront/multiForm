import React from "react";
import "../UI/input.css";
interface IPlaceholder {
  title: string;
  placeholder: string;
}

export default function Input({ title, placeholder }: IPlaceholder) {
  return (
    <label className="label">
      {title}
      <input className="input" placeholder={placeholder} />
    </label>
  );
}
