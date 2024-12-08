import React from "react";
import { addStep, currentStep } from "../../../Store/slices/stepSlice";
import { useSelector, useDispatch } from "react-redux";
import { addConfirm } from "../../../Store/slices/addConfirmSlice";
import useCurrentState from "../../../customHooks/useCurrentState";
import "../NextStep/next.css";
export default function NextStep({ errors }: any) {
  const { isConfirm } = useCurrentState();
  const inputValue = useSelector((state: any) => state.inputValue.inputValue);
  const dispatch = useDispatch();
  const step = useSelector((state: any) => state.step);
  console.log(inputValue);
  const handleDispatchData = (e: any) => {
    e.preventDefault();
    if (step < 4 && Object.keys(errors).length === 0) {
      dispatch(addStep(1));
    }
    step === 4 && dispatch(addConfirm(true));

    return;
  };
  return (
    <>
      {isConfirm === false && (
        <div className="next">
          <button
            className={step > 1 ? "back-step" : "back-step__none"}
            onClick={() => dispatch(currentStep(1))}
          >
            Go back
          </button>

          <button
            type="submit"
            className={step < 4 ? "next-step" : "next-step next-step__submit"}
            onClick={handleDispatchData}
          >
            {step < 4 ? "Next Step" : "Confirm"}
          </button>
        </div>
      )}
    </>
  );
}
