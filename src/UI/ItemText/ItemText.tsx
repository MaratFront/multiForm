import React from "react";
import "./itemText.css";
interface IText {
  text: string;
}
export default function ItemText({ text }: IText) {
  return <p className="item-text">{text}</p>;
}
