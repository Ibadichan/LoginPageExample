import React, { forwardRef } from "react";

function Radio(props, ref) {
  const {
    id,
    label,
    name,
    value,
  } = props;

  return (
    <li className="radio-group__item">
      <input
        ref={ref}
        type="radio"
        id={id}
        name={name}
        value={value}
        className="radio-group__radio visually-hidden"
      />

      {
        label && (
          <label htmlFor={id} className="radio-group__label">{label}</label>
        )
      }
    </li>
  );
}

const forwardedRadio = forwardRef(Radio);

export default forwardedRadio;
