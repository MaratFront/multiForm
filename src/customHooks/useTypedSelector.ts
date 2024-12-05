import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Store/store";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
