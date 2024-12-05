import React from "react";
import "../UI/input.css";
import IPlaceholder from "../interfaces/IPlaceholder";
import { useDispatch } from "react-redux";
import { addError } from "../Store/slices/formSlice";
export default function Input({
  title,
  placeholder,
  register,
  name,
  errors,
}: IPlaceholder) {
  const dispatch = useDispatch();
  return (
    <label className="label">
      <div className="label__title">
        {title}
        {errors && <p className="error">{errors.toString()}</p>}
      </div>
      <input
        className={errors ? "input--error" : "input"}
        placeholder={placeholder}
        {...register(name)}
      />
    </label>
  );
}
