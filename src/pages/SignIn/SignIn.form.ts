import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  emailfmt: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});