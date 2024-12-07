import React from "react";
import { ReactComponent as BgSidebarMob } from "../assets/images/BgSidebarMob.svg";
import useWidthWindow from "../customHooks/useWidthWindow";
import Step from "./components/Step";
import Input from "../UI/Input";
import "../pages/multi-form.css";
import NextStep from "./components/NextStep/NextStep";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
//import { stepTitles } from "../constants/formData";
import { steps } from "../constants/formData";
import useCurrentState from "../customHooks/useCurrentState";
export default function MultiForm() {
  const { currentStep } = useCurrentState();
  return (
    <div className="multi-form">
      <div className="multi-step">
        {useWidthWindow() < 940 && <BgSidebarMob />}
      </div>
      {steps.map(
        ({ title, text }, index) =>
          currentStep - 1 === index && (
            <PersonalInfo title={title} text={text} />
          )
      )}
      {/* {useWidthWindow() < 940 && <NextStep />} */}
    </div>
  );
}
