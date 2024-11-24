import React from "react";
import "../components/step.css";
import { useSelector } from "react-redux";
import useWidthWindow from "../../customHooks/useWidthWindow";
export default function Step() {
  const stepData = new Map([
    ["Your Info", 1],
    ["Select Plan", 2],
    ["ADD-ONS", 3],
    ["SUMMARY", 4],
  ]);
  const step = useSelector((state: any) => state.step);
  const width = useWidthWindow();
  return (
    <>
      <div className="step">
        {Array.from(stepData).map(([key, value]) =>
          width < 940 ? (
            <div
              className={step === value ? "step-number__active" : "step-number"}
            >
              {value}
            </div>
          ) : (
            width > 940 && (
              <div className="step__item">
                <div
                  className={
                    step === value ? "step-number__active" : "step-number"
                  }
                >
                  {value}
                </div>
                <div className="step__data">
                  <div className="step-count">step {value}</div>
                  <p className="step-title">{key}</p>
                </div>
              </div>
            )
          )
        )}
      </div>
    </>
  );
}
