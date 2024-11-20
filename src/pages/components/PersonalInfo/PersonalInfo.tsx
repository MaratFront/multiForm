import React from "react";
import Input from "../../../UI/Input";
import "../PersonalInfo/personal.css";
export default function PersonalInfo() {
  return (
    <div className="personal">
      <h1 className="personal__title">Personal info</h1>
      <p className="personal__text">
        Please provide your name, email address, and phone number.
      </p>
      <div className="personal__data">
        <Input title="name" placeholder="e.g.Stephen King" />
        <Input title="Email Address" placeholder="e.g. stephenking@lorem.com" />
        <Input title="Phone Number" placeholder="e.g. +1 234 567 890" />
      </div>
    </div>
  );
}
