import React from "react";
import "../AddOns/addOns.css";
import ItemTitle from "../itemTitle/itemTitle";
import Checkbox from "../Checkbox/Checkbox";
import ItemText from "../ItemText/ItemText";
interface IAddOns {
  title: string;
  text: string;
  total: string;
}

export default function AddOns({ title, text, total }: IAddOns) {
  return (
    <div className="add-ons">
      <div className="add-ons__container">
        <div className="add-ons__left">
          <Checkbox />
          <div className="add-ons__info">
            <ItemTitle title={title} />
            <ItemText text={text} />
          </div>
        </div>

        <p className="add-ons__price">{total}</p>
      </div>
    </div>
  );
}
