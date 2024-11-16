import React from "react";
export default function Step() {
  const stepData = new Map([
    ["Your Info", 1],
    ["Select Plan", 2],
    ["ADD-ONS", 3],
    ["SUMMARY", 4],
  ]);
  return (
    <div className="step">
      {Array.from(stepData).map(([key, value]) => (
        <div className="step-number">{value}</div>
      ))}
    </div>
  );
}
