import React from "react";
import { ReactComponent as IconCheckmark } from "../../assets/images/IconCheckmark.svg";
import { useSelector, useDispatch } from "react-redux";
import { addChecked } from "../../Store/slices/addOnsSlice";
import "./checkbox.css";
export default function Checkbox() {
  const dispatch = useDispatch();
  const checkmark = useSelector((state: any) => state.addOns.isChecked);
  function checkmarkId() {
    dispatch(addChecked(!checkmark));
  }
  return (
    <div className="checkbox" onClick={checkmarkId}>
      {checkmark && <IconCheckmark />}
    </div>
  );
}
