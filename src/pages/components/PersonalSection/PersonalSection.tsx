import React from "react";
import UserPlan from "../../../UI/UserPlan/UserPlan";
import { ReactComponent as IconArcade } from "../../../assets/images/IconArcade.svg";
import ItemText from "../../../UI/ItemText/ItemText";
import AddOns from "../../../UI/AddOns/AddOns";
import Input from "../../../UI/Input";
import "../PersonalInfo/personal.css";
import useWidthWindow from "../../../customHooks/useWidthWindow";
import NextStep from "../NextStep/NextStep";
import { useSelector } from "react-redux";
import { step1Data, step2Data } from "../../../constants/formData";
export default function PersonalSection() {
  /**        {currentStep === 1 && (
          <>
            <Input title="Name" placeholder="e.g. Stephen King" />
            <Input
              title="Email Address"
              placeholder="e.g. stephenking@lorem.com"
            />
            <Input title="Phone Number" placeholder="e.g. +1 234 567 890" />
          </>
        )}
        {currentStep === 2 && (
          <>
            <UserPlan title="Arcade" text="$9/mo$9/mo" Img={IconArcade} />
            <UserPlan title="Arcade" text="$9/mo$9/mo" Img={IconArcade} />
          </>
        )}
        {currentStep === 3 && (
          <>
            <AddOns
              title="Online service"
              text="Access to multiplayer games"
              price="+$1/mo"
            />
          </>
        )} */
  const currentStep = useSelector((state: any) => state.step);
  const steps = [1, 2, 3, 4];
  return (
    <>
      <div className="personal__items">
        {currentStep === 1 &&
          step1Data.map((step) => (
            <Input title={step.title} placeholder={step.placeholder} />
          ))}
        {currentStep === 2 &&
          step2Data.map((step) => (
            <UserPlan title={step.title} text={step.text} Img={step.img} />
          ))}
      </div>

      {useWidthWindow() >= 940 && <NextStep />}
    </>
  );
}
