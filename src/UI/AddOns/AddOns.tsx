import React from "react";
import "../AddOns/addOns.css";
import ItemTitle from "../itemTitle/itemTitle";
import Checkbox from "../Checkbox/Checkbox";
import ItemText from "../ItemText/ItemText";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useCurrentState from "../../customHooks/useCurrentState";
import { toggleChecked } from "../../Store/slices/addOnsCheckedSlice";
import { addOnsData, addDeleteData } from "../../Store/slices/addOnsCardsSlice";
import IAddOns from "../../interfaces/IAddons";

export default function AddOns({ id, title, text, total }: IAddOns) {
  const { checkedItems, currentRadioFlag } = useCurrentState();
  const dispatch = useDispatch();
  const addOnsClick = checkedItems.includes(id);
  const handleDispatchData = () => {
    const payload = { id, title, text, total };
    dispatch(addDeleteData(payload));
    dispatch(addOnsData(payload));
  };

  useEffect(() => {
    if (addOnsClick) {
      handleDispatchData();
    }
  }, [currentRadioFlag, addOnsClick]);

  function handleAddOnsClick() {
    dispatch(toggleChecked(id));

    const payload = { id, title, text, total };
    dispatch(addOnsClick ? addDeleteData(payload) : addOnsData(payload));
  }

  return (
    <>
      <div
        className={addOnsClick === false ? "add-ons" : "add-ons__clicked"}
        onClick={handleAddOnsClick}
      >
        <div className="add-ons__container">
          <div className="add-ons__left">
            <Checkbox id={id} />
            <div className="add-ons__info">
              <ItemTitle title={title} />
              <ItemText text={text} />
            </div>
          </div>

          <p className="add-ons__price">{total}</p>
        </div>
      </div>
    </>
  );
}
