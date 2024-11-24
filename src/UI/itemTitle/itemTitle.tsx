import React from "react";
import "./itemTitle.css";
interface ITitle {
  title: string;
}
export default function itemTitle({ title }: ITitle) {
  return <p className="item-title">{title}</p>;
}
