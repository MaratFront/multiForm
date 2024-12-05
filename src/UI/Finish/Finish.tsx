import React from "react";
import useCurrentState from "../../customHooks/useCurrentState";
import "../Finish/finish.css";
import { useDispatch } from "react-redux";
import { currentStep } from "../../Store/slices/stepSlice";
export default function Finish() {
  const { addOnsItems, currentPlan, currentRadioFlag } = useCurrentState();
  const [sumTotal, setSumTotal] = React.useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let addOnsTotal = 0;

    const totalPlan = Number(currentPlan.total.match(/\d+/));

    addOnsItems.forEach((item: any) => {
      const itemTotal = Number(item.total.match(/\d+/));
      addOnsTotal += itemTotal;
    });

    setSumTotal(addOnsTotal + totalPlan);
  }, [addOnsItems, currentPlan]);
  return (
    <div className="finish">
      <div className="finish__container">
        <p className="item-title">
          {currentPlan.plan}({currentPlan.time})
        </p>
        <p className="finish__count">{currentPlan.total}</p>
      </div>
      <button
        className="finish__change"
        onClick={() => dispatch(currentStep(2))}
      >
        Change
      </button>
      <div className="finish__hr"></div>
      <div className="finish__addons">
        {addOnsItems.map((item: any) => (
          <div className="finish__addons--items">
            <p className="finish__addons--title">{item.title}</p>
            <p className="finish__addons--total">{item.total}</p>
          </div>
        ))}
        <div className="finish__sum">
          <p className="finish__sum--title">Total (per {currentPlan.time})</p>
          <p className="finish__sum--result">
            +${sumTotal}/{currentRadioFlag === false ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </div>
  );
}
