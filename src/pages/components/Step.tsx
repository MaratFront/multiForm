import React from "react";
import "../components/step.css";
import useCurrentState from "../../customHooks/useCurrentState";
import useWidthWindow from "../../customHooks/useWidthWindow";
export default function Step() {
  const stepData = new Map([
    ["Your Info", 1],
    ["Select Plan", 2],
    ["ADD-ONS", 3],
    ["SUMMARY", 4],
  ]);
  const { currentStep } = useCurrentState();
  const width = useWidthWindow();
  return (
    <>
      <div className="step">
        {Array.from(stepData).map(([key, value]) =>
          width < 940 ? (
            <div
              className={
                currentStep === value ? "step-number__active" : "step-number"
              }
            >
              {value}
            </div>
          ) : (
            width > 940 && (
              <div className="step__item">
                <div
                  className={
                    currentStep === value
                      ? "step-number__active"
                      : "step-number"
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
