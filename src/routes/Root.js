import { rootPath } from "helpers/routes";
import RootPage from "pages/Root";

const RootRoute = {
  exact: true,
  path: rootPath(),
  component: RootPage,
};

export default RootRoute;
