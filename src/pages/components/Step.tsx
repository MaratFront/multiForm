import React from "react";
import "../components/step.css";
import { useSelector } from "react-redux";
export default function Step() {
  const stepData = new Map([
    ["Your Info", 1],
    ["Select Plan", 2],
    ["ADD-ONS", 3],
    ["SUMMARY", 4],
  ]);
  const step = useSelector((state: any) => state.step);
  return (
    <>
      <div className="step">
        {Array.from(stepData).map(([key, value]) => (
          <div
            className={step === value ? "step-number__active" : "step-number"}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}
