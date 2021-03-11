import React from "react";
import { Link } from "react-router-dom";
import { signUpPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";
import AuthPagesFooter from "components/common/AuthPagesFooter";
import Button from "components/UI/Button";
import InputGroup from "components/UI/InputGroup";
import "./style.css";

function SignInPage() {
  return (
    <AuthLayout className="sign-in" header="Please log in to your account">
      <form
        id="sign-in-form"
        className="sign-in-form sign-in__form"
        method="POST"
        action="/sign-in"
        noValidate
      >
        <InputGroup className="sign-in-form__item">
          <InputGroup.Label className="visually-hidden" htmlFor="email-field">
            Enter your email:
          </InputGroup.Label>

          <InputGroup.Input
            type="email"
            id="email-field"
            placeholder="Email"
            autoComplete="email"
            name="email"
          />
        </InputGroup>

        <InputGroup className="sign-in-form__item">
          <InputGroup.Label
            className="visually-hidden"
            htmlFor="password-field"
          >
            Enter your password:
          </InputGroup.Label>

          <InputGroup.Input
            type="password"
            id="password-field"
            placeholder="Password"
            autoComplete="current-password"
            name="password"
            $canShowPassword
          />
        </InputGroup>
      </form>

      <AuthPagesFooter
        actions={[
          <Button type="submit" form="sign-in-form">
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

export default SignInPage;
