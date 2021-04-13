import React from "react";
import { Link } from "react-router-dom";
import { signInPath, signUpPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";
import AuthPagesFooter from "./components/AuthPagesFooter";
import Button from "components/UI/Button";

function RootPage() {
  return (
    <AuthLayout header="Welcome to the our app.">
      <AuthPagesFooter
        actions={[
          <Button $component={Link} to={signInPath()}>
            Sign in
          </Button>,
          <Button $type="tertiary" $component={Link} to={signUpPath()}>
            New account
          </Button>,
        ]}
      />
    </AuthLayout>
  );
}

export default RootPage;
