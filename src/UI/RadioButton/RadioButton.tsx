import React, { useState } from "react";
import "../RadioButton/radioButton.css";
import { step2DataYear } from "../../constants/formData";
import { useDispatch, useSelector } from "react-redux";
import { radioAction } from "../../Store/slices/radioSlice";
interface IRadio {
  titleLeft: string;
  titleRight: string;
}
export default function RadioButton({ titleLeft, titleRight }: IRadio) {
  //const [radioCheck, setRadioCheck] = useState(false);
  const radioCheck = useSelector((state: any) => state.radio.radio);

  const dispatch = useDispatch();
  return (
    <div
      className="radio-container"
      onClick={() => dispatch(radioAction(!radioCheck))}
    >
      <p className={radioCheck === false ? "title-left" : "title-left__active"}>
        {titleLeft}
      </p>
      <div className="radio" onClick={() => dispatch(radioAction(!radioCheck))}>
        <div
          className={
            radioCheck === false ? "radio-check" : "radio-check__active"
          }
        ></div>
      </div>
      <p
        className={radioCheck === true ? "title-right" : "title-right__active"}
      >
        {titleRight}
      </p>
    </div>
  );
}
