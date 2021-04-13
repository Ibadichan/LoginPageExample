import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";
import Button from "components/UI/Button";
import InputGroup from "components/UI/InputGroup";
import userSchema from "./userSchema";
import "./style.css";

function SignInPage() {
  const [currentUser, setCurrentUser] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema),
  });

  return (
    <AuthLayout
      className="sign-in"
      header={
        currentUser
          ? `Hello ${currentUser.email}`
          : "Please log in to your account"
      }
    >
      {currentUser ? (
        <p>{JSON.stringify(currentUser)}</p>
      ) : (
        <>
          <form
            onSubmit={handleSubmit(setCurrentUser)}
            className="sign-in-form sign-in__form"
            method="POST"
            action="/sign-in"
            noValidate
          >
            <InputGroup className="sign-in-form__item">
              <InputGroup.Label
                className="visually-hidden"
                htmlFor="email-field"
              >
                Enter your email:
              </InputGroup.Label>

              <InputGroup.Input
                type="email"
                id="email-field"
                placeholder="Email"
                autoComplete="email"
                name="email"
                ref={register}
                $error={errors.email?.message}
                autoFocus
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
                ref={register}
                $error={errors.password?.message}
                $canShowPassword
              />
            </InputGroup>

            <Button type="submit" >
              Sign in
            </Button>
          </form>

          <Button
            $type="tertiary"
            $component={Link}
            to={signUpPath()}
            className="sign-in__another-action"
          >
            New account
          </Button>
        </>
      )}
    </AuthLayout>
  );
}

export default SignInPage;
