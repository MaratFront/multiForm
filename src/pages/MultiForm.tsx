import React from "react";
import { ReactComponent as BgSidebarMob } from "../assets/images/BgSidebarMob.svg";
import useWidthWindow from "../customHooks/useWidthWindow";
import Step from "./components/Step";
import Input from "../UI/Input";
import "../pages/multi-form.css";
import NextStep from "./components/NextStep/NextStep";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
//import { stepTitles } from "../constants/formData";
export default function MultiForm() {
  return (
    <div className="multi-form">
      <div className="multi-step">
        {useWidthWindow() < 940 && <BgSidebarMob />}
      </div>
      {
        <>
          <PersonalInfo
            title="Personal info"
            text="Please provide your name, email address, and phone number."
          />
          {useWidthWindow() < 940 && <NextStep />}
        </>
      }
    </div>
  );
}
