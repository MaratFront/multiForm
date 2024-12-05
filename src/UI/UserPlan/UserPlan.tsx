import React from "react";
import "../UserPlan/userplan.css";
import { useDispatch } from "react-redux";
import { addPlan } from "../../Store/slices/planSlice";
import useCurrentState from "../../customHooks/useCurrentState";
interface IPlan {
  title: string;
  total: string;
  Img: React.FC;
  time: string;
}

export default function UserPlan({ title, total, Img, time }: IPlan) {
  const dispatch = useDispatch();
  const { currentPlan } = useCurrentState();

  const handleClickPlan = () => {
    dispatch(addPlan({ title, total, time }));
  };
  return (
    <div
      className={currentPlan.plan === title ? "user-plan__active" : "user-plan"}
      onClick={handleClickPlan}
    >
      <div className="user-plan__container">
        <Img />

        <div className="user-plan__info">
          <p className="item__title">{title}</p>
          <p className="item__text">{total}</p>
        </div>
      </div>
    </div>
  );
}
