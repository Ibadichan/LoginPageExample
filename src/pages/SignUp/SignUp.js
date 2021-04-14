import React, { useCallback, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInPath, rootPath } from "helpers/routes";
import AuthContext from "contexts/AuthContext";
import AuthLayout from "components/layouts/Auth";
import Button from "components/UI/Button";
import Form from "./components/Form";
import userSchema from "./userSchema";
import { requests } from 'api';
import "./style.css";

function SignUpPage() {
  const [commonFormError, setCommonFormError] = useState(null);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema),
  });

  const {
    rememberAuthToken,
    currentUser,
    isCurrentUserIndeterminated,
  } = useContext(AuthContext);

  const onSubmit = useCallback(async (values) => {
    setIsFormLoading(true);

    try {
      const response = await requests.users.registerUser(values);

      if (response.body) {
        setCommonFormError(null);

        rememberAuthToken(response.body.token);
      }
    } catch (error) {
      if (error && error.status) {
        setCommonFormError(error.response?.body?.error);
      }
    } finally {
      setIsFormLoading(false);
    }
  }, [rememberAuthToken]);

  const guestContent = (
    <AuthLayout
      className="sign-up"
      header="Enter your details to create an account"
    >
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
    </AuthLayout>
  );

  const clientContent = (
    <Redirect to={rootPath()} />
  );

  if (isCurrentUserIndeterminated) {
    return <AuthLayout />;
  }

  return currentUser ? clientContent : guestContent;
}

export default SignUpPage;
