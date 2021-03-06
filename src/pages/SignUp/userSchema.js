import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Incorrect email").required("Email is required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
  currency: yup
    .string()
    .oneOf(['usd', 'rub'], "Choose correct currency")
    .nullable()
    .required("Currency is required"),
});

export default schema;
