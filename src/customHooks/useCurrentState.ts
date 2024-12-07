import { useTypedSelector } from "./useTypedSelector";
export default function useCurrentState() {
  const inputValue = useTypedSelector((state) => state.inputValue.inputValue);
  const currentRadioFlag = useTypedSelector((state) => state.radio.radio);
  const currentStep = useTypedSelector((state) => state.step);
  const checkedItems = useTypedSelector(
    (state) => state.addOnsChecked.checkedItems
  );
  const isConfirm = useTypedSelector((state) => state.addConfirm.isConfirm);
  const currentPlan = useTypedSelector((state) => state.plan);
  const addOnsItems = useTypedSelector((state) => state.addOns);
  return {
    addOnsItems,
    currentRadioFlag,
    currentStep,
    checkedItems,
    currentPlan,
    inputValue,
    isConfirm,
  };
}
