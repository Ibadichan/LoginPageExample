import React from "react";
import InputGroup from "components/UI/InputGroup";
import Button from "components/UI/Button";

function Form(props) {
  const {
    onSubmit,
    commonError,
    register,
    errors,
    isLoading,
  } = props;

  return (
    <form
      onSubmit={onSubmit}
      className="sign-in-form sign-in__form"
      noValidate
    >
      {commonError && (
        <aside
          className="sign-in-form__common-error"
        >
          {commonError}
        </aside>
      )}

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
          ref={register}
          $error={errors.email?.message}
          autoFocus
        />
      </InputGroup>

      <InputGroup className="sign-in-form__item">
        <InputGroup.Label className="visually-hidden" htmlFor="password-field">
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

      <Button type="submit" disabled={isLoading}>
        Sign in
      </Button>
    </form>
  );
}

export default Form;
