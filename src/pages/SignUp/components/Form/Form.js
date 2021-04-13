import React from "react";
import InputGroup from "components/UI/InputGroup";
import RadioGroup from "components/UI/RadioGroup";
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
      className="sign-up-form sign-up__form"
      noValidate
    >
      {commonError && (
        <aside className="sign-up-form__common-error">{commonError}</aside>
      )}

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
          ref={register}
          $error={errors.email?.message}
          autoFocus
        />
      </InputGroup>

      <InputGroup className="sign-up-form__item">
        <InputGroup.Label className="visually-hidden" htmlFor="password-field">
          Enter your password:
        </InputGroup.Label>

        <InputGroup.Input
          type="password"
          id="password-field"
          placeholder="Password"
          autoComplete="new-password"
          name="password"
          ref={register}
          $error={errors.password?.message}
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
          name="passwordConfirmation"
          ref={register}
          $error={errors.passwordConfirmation?.message}
          $canShowPassword
        />
      </InputGroup>

      <RadioGroup
        className="sign-up-form__item"
        $error={errors.currency?.message}
      >
        <RadioGroup.Legend>Choose your currency:</RadioGroup.Legend>

        <RadioGroup.List>
          <RadioGroup.Radio
            id="currency-usd-field"
            label="USD"
            name="currency"
            value="usd"
            ref={register}
          />

          <RadioGroup.Radio
            id="currency-rub-field"
            label="RUB"
            name="currency"
            value="rub"
            ref={register}
          />
        </RadioGroup.List>
      </RadioGroup>

      <Button
        type="submit"
        className="sign-up-form__submit"
        disabled={isLoading}
      >
        Create new account
      </Button>
    </form>
  );
}

export default Form;
