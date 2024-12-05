import React from "react";
import { ReactComponent as IconCheckmark } from "../../assets/images/IconCheckmark.svg";
import useCurrentState from "../../customHooks/useCurrentState";
import "./checkbox.css";
interface ICheckboxId {
  id: string;
}

export default function Checkbox({ id }: ICheckboxId) {
  const { checkedItems } = useCurrentState();
  const isChecked = checkedItems.includes(id); // Проверяем, активен ли чекбокс

  return (
    <div className={`checkbox ${isChecked ? "checked" : ""}`}>
      {isChecked && <IconCheckmark />}
    </div>
  );
}
