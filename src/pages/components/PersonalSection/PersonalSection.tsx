import React from "react";
import UserPlan from "../../../UI/UserPlan/UserPlan";
import AddOns from "../../../UI/AddOns/AddOns";
import Input from "../../../UI/Input";
import { stepData3, stepData3Year } from "../../../constants/formData";
import "../PersonalInfo/personal.css";
import useWidthWindow from "../../../customHooks/useWidthWindow";
import NextStep from "../NextStep/NextStep";
import { useSelector } from "react-redux";
import RadioButton from "../../../UI/RadioButton/RadioButton";
import {
  step1Data,
  step2Data,
  step2DataYear,
} from "../../../constants/formData";

export default function PersonalSection() {
  const currentRadioFlag = useSelector((state: any) => state.radio.radio);
  const currentStep = useSelector((state: any) => state.step);

  return (
    <>
      <div className="personal__items">
        {currentStep === 1 &&
          step1Data.map((step) => (
            <Input title={step.title} placeholder={step.placeholder} />
          ))}
        <>
          {currentStep === 2 &&
            currentRadioFlag === false &&
            step2Data.map((step) => (
              <UserPlan
                title={step.title}
                text={step.total}
                Img={step.img}
                time={step.time}
              />
            ))}
          {currentStep === 2 &&
            currentRadioFlag === true &&
            step2DataYear.map((step) => (
              <UserPlan
                title={step.title}
                text={step.total}
                Img={step.img}
                time={step.time}
              />
            ))}
          {currentStep === 3 &&
            currentRadioFlag === false &&
            stepData3.map((step) => (
              <AddOns title={step.title} text={step.text} total={step.total} />
            ))}

          {currentStep === 3 &&
            currentRadioFlag === true &&
            stepData3Year.map((step) => (
              <AddOns title={step.title} text={step.text} total={step.total} />
            ))}
        </>
      </div>
      {currentStep === 2 && (
        <RadioButton titleLeft="Monthly" titleRight="Yearly" />
      )}
      {useWidthWindow() >= 940 && <NextStep />}
    </>
  );
}
