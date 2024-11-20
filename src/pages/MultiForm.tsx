import React from "react";
import { ReactComponent as BgSidebarMob } from "../assets/images/BgSidebarMob.svg";
import Step from "./components/Step";
import "../pages/multi-form.css";
import NextStep from "./components/NextStep/NextStep";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
export default function MultiForm() {
  return (
    <div className="multi-form">
      <div className="multi-step">
        <Step />
        <BgSidebarMob />
      </div>
      <PersonalInfo />
      <NextStep />
    </div>
  );
}
