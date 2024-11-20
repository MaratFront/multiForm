import React from "react";
import { addStep, currentStep } from "../../../Store/slices/stepSlice";
import { useSelector, useDispatch } from "react-redux";
import "../NextStep/next.css";
export default function NextStep() {
  const dispatch = useDispatch();
  const step = useSelector((state: any) => state.step);
  return (
    <div className="next">
      <button
        className={step > 1 ? "back-step" : "back-step__none"}
        onClick={() => dispatch(currentStep(1))}
      >
        Go back
      </button>

      <button className={"next-step"} onClick={() => dispatch(addStep(1))}>
        Next Step
      </button>
    </div>
  );
}
