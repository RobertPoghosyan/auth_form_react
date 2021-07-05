import * as Yup from "yup";

export const loginSchema = () => {
  return Yup.object().shape({
    userName: Yup.string()
      .min(3, "Min length is 3 symbol")
      .max(20, "Max length is 20 symbol")
      .required("Required"),
    password: Yup.string()
      .min(6, "Min length is 6 symbol")
      .max(20, "Max length is 20 symbol")
      .required("Required"),
  });
};

export default loginSchema;
