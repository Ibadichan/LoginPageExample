import React from "react";
import { Link } from "react-router-dom";
import { signInPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";
import AuthPagesFooter from "components/common/AuthPagesFooter";
import Button from "components/UI/Button";
import InputGroup from "components/UI/InputGroup";
import "./style.css";

function SignUpPage() {
  return (
    <AuthLayout
      className="sign-up"
      header="Enter your details to create an account"
    >
      <form
        className="sign-up-form sign-up__form"
        id="sign-up-form"
        method="POST"
        action="/sign-up"
        noValidate
      >
        <InputGroup className="sign-up-form__item">
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

        <InputGroup className="sign-up-form__item">
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
            autoComplete="new-password"
            name="password"
            $canShowPassword
          />
        </InputGroup>

        <InputGroup className="sign-up-form__item">
          <InputGroup.Label
            className="visually-hidden"
            htmlFor="password-confirmation-field"
          >
            Confirm your password:
          </InputGroup.Label>

          <InputGroup.Input
            type="password"
            id="password-confirmation-field"
            placeholder="Password Again"
            name="password-confirmation"
            $canShowPassword
          />
        </InputGroup>
      </form>

      <AuthPagesFooter
        actions={[
          <Button type="submit" form="sign-up-form">
            Create new account
          </Button>,
          <Button $type="tertiary" $component={Link} to={signInPath()}>
            Sign in
          </Button>,
        ]}
      />
    </AuthLayout>
  );
}

export default SignUpPage;
