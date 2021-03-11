import { signInPath } from "helpers/routes";
import SignInPage from "pages/SignIn";

const SignInRoute = {
  exact: true,
  path: signInPath(),
  component: SignInPage,
};

export default SignInRoute;
