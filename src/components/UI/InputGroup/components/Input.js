import React, { useState, useCallback } from "react";
import classNames from "classnames";
import Button from "components/UI/Button";

function Input(props) {
  const { type, className, $canShowPassword } = props;
  const [inputType, setInputType] = useState(type);

  const nodeProps = {
    ...props,
    type: inputType,
    className: classNames("input-group__input", className),
  };

  for (const propertyName in nodeProps) {
    if (propertyName.startsWith("$")) {
      delete nodeProps[propertyName];
    }
  }

  const togglePasswordVisibility = useCallback(() => {
    setInputType((prevState) => {
      const newState = prevState === "password" ? "text" : "password";
      return newState;
    });
  }, []);

  const input = <input {...nodeProps} />;

  const inputWithShowPassword = (
    <span className="input-group__body">
      {input}
      <Button
        className="input-group__show-password"
        onClick={togglePasswordVisibility}
      >
        {inputType === "password" ? "Show" : "Hide"}
        <span className="visually-hidden"> the entered password</span>
      </Button>
    </span>
  );

  return $canShowPassword ? inputWithShowPassword : input;
}

Input.defaultProps = {
  type: "text",
};

export default Input;
