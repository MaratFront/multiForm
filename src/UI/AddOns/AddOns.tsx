import React from "react";
import "../AddOns/addOns.css";
import ItemTitle from "../itemTitle/itemTitle";
import ItemText from "../ItemText/ItemText";
interface IAddOns {
  title: string;
  text: string;
  price: string;
}

export default function AddOns({ title, text, price }: IAddOns) {
  return (
    <div className="add-ons">
      <div className="add-ons__container">
        <input type="checkbox" className="add-ons__check" />
        <div className="add-ons__info">
          <ItemTitle title={title} />
          <ItemText text={text} />
        </div>
        <p className="add-ons__price">{price}</p>
      </div>
    </div>
  );
}
