import { ReactComponent as IconArcade } from "../assets/images/IconArcade.svg";
import { ReactComponent as IconAdvanced } from "../assets/images/IconAdvanced.svg";
import { ReactComponent as IconPro } from "../assets/images/IconPro.svg";
import { time } from "console";
export const steps = [
  {
    title: "Personal info",
    text: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    text: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    text: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    text: "Double-check everything looks OK before confirming.",
  },
];
export const step1Data = [
  { title: "Name", placeholder: "e.g. Stephen King" },
  { title: "Email Address", placeholder: "e.g. stephenking@lorem.com" },
  { title: "Phone Number", placeholder: "e.g. +1 234 567 890" },
];
export const step2Data = [
  { title: "Arcade", total: "$9/mo", img: IconArcade, time: "Monthly" },
  { title: "Advanced", total: "$12/mo", img: IconAdvanced, time: "Monthly" },
  { title: "Pro", total: "$15/mo", img: IconPro, time: "Monthly" },
];
export const step2DataYear = [
  { title: "Arcade", total: "$90/yr", img: IconArcade, time: "Yearly" },
  { title: "Advanced", total: "$120/yr", img: IconAdvanced, time: "Yearly" },
  { title: "Pro", total: "$150/yr", img: IconPro, time: "Yearly" },
];
export const stepData3 = [
  {
    title: "Online service",
    text: "Access to multiplayer games",
    total: "+$1/mo",
    isChecked: false,
  },
  {
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    total: "+$2/mo",
    isChecked: false,
  },
  {
    title: "Customizable profile",
    text: "Custom theme on your profile",
    total: "+$2/mo",
    isChecked: false,
  },
];
export const stepData3Year = [
  {
    title: "Online service",
    text: "Access to multiplayer games",
    total: "+$10/yr",
    isChecked: false,
  },
  {
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    total: "+$20/yr",
    isChecked: false,
  },
  {
    title: "Customizable profile",
    text: "Custom theme on your profile",
    total: "+$20/yr",
    isChecked: false,
  },
];
