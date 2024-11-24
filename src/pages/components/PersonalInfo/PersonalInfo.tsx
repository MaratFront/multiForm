import React from "react";
import Input from "../../../UI/Input";
import "../PersonalInfo/personal.css";
import NextStep from "../NextStep/NextStep";
import { useSelector } from "react-redux";
import { ReactComponent as BgSidebarDesc } from "../../../assets/images/BgSidebarDesc.svg";
import useWidthWindow from "../../../customHooks/useWidthWindow";
import Step from "../Step";
import PersonalSection from "../PersonalSection/PersonalSection";
interface IPersonalInfo {
  title: string;
  text: string;
  // children: React.ReactNode;
}
export default function PersonalInfo({ title, text }: IPersonalInfo) {
  return (
    <div className="personal">
      {useWidthWindow() >= 940 && <BgSidebarDesc />}
      <div className="personal__container">
        <h1 className="personal__title">{title}</h1>
        <p className="personal__text">{text}</p>
      </div>
      <PersonalSection />
      <Step />
    </div>
  );
}
