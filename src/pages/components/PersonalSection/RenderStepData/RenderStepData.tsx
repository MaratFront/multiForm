import React from "react";
import { UserPlan, AddOns, Input, Finish } from "../../../../UI/index";
import { stepData3, stepData3Year } from "../../../../constants/formData";
import useCurrentState from "../../../../customHooks/useCurrentState";
import ThankYou from "../../PersonalInfo/ThankYou/ThankYou";
import { schema } from "../../../../pages/components/PersonalInfo/schema";
import { useForm } from "react-hook-form";
import NextStep from "../../NextStep/NextStep";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { addStep } from "../../../../Store/slices/stepSlice";
import { addConfirm } from "../../../../Store/slices/addConfirmSlice";

import {
  step1Data,
  step2Data,
  step2DataYear,
} from "../../../../constants/formData";
export default function RenderStepData() {
  const { currentRadioFlag, currentStep, isConfirm, inputValue } =
    useCurrentState();
  const dispatch = useDispatch();
  console.log(inputValue);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  function onSubmit(e: any) {
    e.preventDefault();
    if (currentStep < 4 && Object.keys(errors).length === 0) {
      dispatch(addStep(1));
    }
    currentStep === 4 && dispatch(addConfirm(true));

    return;
  }
  return (
    <>
      <form className="personal__data" onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 &&
          step1Data.map((step) => (
            <Input
              key={step.name} // добавлен ключ для предотвращения ошибок React
              register={register}
              title={step.title}
              placeholder={step.placeholder}
              name={step.name}
              errors={errors[step.name]?.message}
              inputValue={inputValue}
            />
          ))}
        <>
          {currentStep === 2 &&
            (currentRadioFlag === false ? step2Data : step2DataYear).map(
              (step) => (
                <UserPlan
                  key={step.title} // уникальный ключ
                  title={step.title}
                  total={step.total}
                  Img={step.img}
                  time={step.time}
                />
              )
            )}
          {currentStep === 3 &&
            (currentRadioFlag === false ? stepData3 : stepData3Year).map(
              (step, index) => (
                <AddOns
                  key={index}
                  id={`add-on-${index}`}
                  title={step.title}
                  text={step.text}
                  total={step.total}
                />
              )
            )}
          {currentStep === 4 && !isConfirm ? (
            <Finish />
          ) : (
            currentStep === 4 && <ThankYou />
          )}
        </>
        <NextStep errors={errors} onSubmit={onSubmit} />
      </form>
    </>
  );
}
