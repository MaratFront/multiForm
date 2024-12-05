import React from "react";
import useCurrentState from "../../../customHooks/useCurrentState";
interface IRadioTitle {
  title: string;
  defaultClassName: string;
  activeClassName: string;
  radioFlagProp: boolean;
}
export default function RadioTitle({
  title,
  defaultClassName,
  activeClassName,
  radioFlagProp,
}: IRadioTitle) {
  const { currentRadioFlag } = useCurrentState();
  return (
    <p
      className={
        currentRadioFlag === radioFlagProp ? defaultClassName : activeClassName
      }
    >
      {title}
    </p>
  );
}
