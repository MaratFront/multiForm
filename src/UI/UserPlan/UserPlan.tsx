import React from "react";
import "../UserPlan/userplan.css";
import { useDispatch, useSelector } from "react-redux";
import { addPlan } from "../../Store/slices/planSlice";

interface IPlan {
  title: string;
  text: string;
  Img: React.FC;
  time: string;
}

export default function UserPlan({ title, text, Img, time }: IPlan) {
  const dispatch = useDispatch();
  const planData = useSelector((state: any) => state.plan);
  console.log(planData);
  const handleClickPlan = () => {
    dispatch(addPlan({ title, text, time }));
  };
  return (
    <div
      className={planData.plan === title ? "user-plan__active" : "user-plan"}
      onClick={handleClickPlan}
    >
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
