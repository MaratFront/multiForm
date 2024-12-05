import React from "react";
import "../PersonalInfo/personal.css";
import { ReactComponent as BgSidebarDesc } from "../../../assets/images/BgSidebarDesc.svg";
import useWidthWindow from "../../../customHooks/useWidthWindow";
import Step from "../Step";
import PersonalSection from "../PersonalSection/PersonalSection";
import IPersonalInfo from "../../../interfaces/IPersonalInfo";
import useCurrentState from "../../../customHooks/useCurrentState";
export default function PersonalInfo({ title, text }: IPersonalInfo) {
  const { isConfirm } = useCurrentState();
  return (
    <div className="personal">
      {useWidthWindow() >= 940 && <BgSidebarDesc />}
      <form className="personal__container">
        {isConfirm === false ? (
          <h1 className="personal__title">{title}</h1>
        ) : (
          ""
        )}
        {isConfirm === false ? (
          <p className="personal__text personal__bottom--step4">{text}</p>
        ) : (
          ""
        )}
        <PersonalSection />
      </form>

      <Step />
    </div>
  );
}
