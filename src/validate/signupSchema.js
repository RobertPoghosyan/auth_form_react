import * as Yup from "yup";

export const signupSchema = () => {
  return Yup.object().shape({
    userName: Yup.string()
      .min(3, "Min length is 3 symbol")
      .max(20, "Max length is 20 symbol")
      .required("Required"),
    password: Yup.string()
      .max(20, "Max length is 20 symbol")
      .matches(
        /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 6 characters, one uppercase and one number"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Incorrect password")
      .required("Required"),
  });
};

export default signupSchema;
