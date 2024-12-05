import React, { useState } from "react";
import "../RadioButton/radioButton.css";
import useCurrentState from "../../customHooks/useCurrentState";
import { useDispatch, useSelector } from "react-redux";
import { radioAction } from "../../Store/slices/radioSlice";
import IRadio from "../../interfaces/IRadio";
import RadioTitle from "../UserPlan/RadioTitle/RadioTitle";
export default function RadioButton({ titleLeft, titleRight }: IRadio) {
  //const [radioCheck, setRadioCheck] = useState(false);
  const { currentRadioFlag } = useCurrentState();
  const dispatch = useDispatch();
  const radioCheckClick = () => dispatch(radioAction(!currentRadioFlag));
  return (
    <div className="radio-container" onClick={radioCheckClick}>
      <RadioTitle
        title={titleLeft}
        defaultClassName="title-left"
        activeClassName="title-left__active"
        radioFlagProp={false}
      />
      <div className="radio" onClick={radioCheckClick}>
        <div
          className={
            currentRadioFlag === false ? "radio-check" : "radio-check__active"
          }
        ></div>
      </div>
      <RadioTitle
        title={titleRight}
        defaultClassName="title-right"
        activeClassName="title-right__active"
        radioFlagProp={true}
      />
    </div>
  );
}
