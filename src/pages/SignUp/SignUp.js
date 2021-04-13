import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";
import Button from "components/UI/Button";
import CurrentUserDetails from './components/CurrentUserDetails';
import Form from './components/Form';
import userSchema from "./userSchema";
import { registerUser } from './API';
import "./style.css";

function SignUpPage() {
  const [createdUser, setCreatedUser] = useState(null);
  const [commonFormError, setCommonFormError] = useState(null);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = useCallback(async (values) => {
    setIsFormLoading(true);

    try {
      const response = await registerUser(values);

      if (response.body) {
        setCommonFormError(null);
        setCreatedUser(response.body);
      }
    } catch (error) {
      if (error && error.status) {
        setCommonFormError(error.response?.body?.error)
      }
    } finally {
      setIsFormLoading(false);
    }
  }, []);

  return (
    <AuthLayout
      className="sign-up"
      header={
        createdUser
          ? "User was created!"
          : "Enter your details to create an account"
      }
    >
      {createdUser ? (
        <CurrentUserDetails user={createdUser} />
      ) : (
        <>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            commonError={commonFormError}
            register={register}
            errors={errors}
            isLoading={isFormLoading}
          />

          <Button
            $type="tertiary"
            $component={Link}
            to={signInPath()}
            className="sign-up__another-action"
          >
            Sign in
          </Button>
        </>
      )}
    </AuthLayout>
  );
}

export default SignUpPage;
