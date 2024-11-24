import React from "react";
import "../UserPlan/userplan.css";
interface IPlan {
  title: string;
  text: string;
  Img: any;
}

export default function UserPlan({ title, text, Img }: IPlan) {
  return (
    <div className="user-plan">
      <div className="user-plan__container">
        <Img />
        <div className="user-plan__info">
          <p className="item__title">{title}</p>
          <p className="item__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
