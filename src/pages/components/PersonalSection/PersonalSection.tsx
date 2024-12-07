import React from "react";
import "../PersonalInfo/personal.css";
import useWidthWindow from "../../../customHooks/useWidthWindow";
import NextStep from "../NextStep/NextStep";
import { useDispatch } from "react-redux";
import RadioButton from "../../../UI/RadioButton/RadioButton";
import RenderStepData from "./RenderStepData/RenderStepData";
import { step2Data, step2DataYear } from "../../../constants/formData";
import useCurrentState from "../../../customHooks/useCurrentState";
import { addPlan } from "../../../Store/slices/planSlice";
import { IStep2Data } from "../../../interfaces/IStep2Data";
export default function PersonalSection() {
  const { currentRadioFlag, currentStep, currentPlan } = useCurrentState();
  const dispatch = useDispatch();
  const mappingToStepData = (data: IStep2Data[]) => {
    const currentIndexYearItem = data.findIndex(
      (plan: IStep2Data) => plan.title === currentPlan.plan
    );
    dispatch(addPlan(data[currentIndexYearItem]));
  };
  React.useEffect(() => {
    currentRadioFlag === true
      ? mappingToStepData(step2DataYear)
      : mappingToStepData(step2Data);
  }, [currentRadioFlag]);
  return (
    <>
      <RenderStepData />
      {currentStep === 2 && (
        <RadioButton titleLeft="Monthly" titleRight="Yearly" />
      )}

      {/* {useWidthWindow() >= 940 && <NextStep />} */}
    </>
  );
}
