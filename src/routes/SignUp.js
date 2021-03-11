import { signUpPath } from "helpers/routes";
import SignUpPage from "pages/SignUp";

const SignUpRoute = {
  exact: true,
  path: signUpPath(),
  component: SignUpPage,
};

export default SignUpRoute;
