import * as yup from "yup";
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const PHONE_NUMBER_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
export const schema = yup.object().shape({
  username: yup.string().trim().required("This field is required"),
  email: yup
    .string()
    .trim()
    .required("This field is required")
    .matches(EMAIL_REGEXP, "email format is incorrect"),
  phone: yup
    .string()
    .trim()
    .required("This field is required")
    .matches(PHONE_NUMBER_REGEXP, "phone format is incorrect"),
});
