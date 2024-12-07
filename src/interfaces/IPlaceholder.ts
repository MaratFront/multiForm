import { UseFormRegister, FieldValues } from "react-hook-form";
import { Merge, FieldError, FieldErrorsImpl } from "react-hook-form";
interface IPlaceholder {
  title: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  name: string;
  errors?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  inputValue: string;
}

export default IPlaceholder;
