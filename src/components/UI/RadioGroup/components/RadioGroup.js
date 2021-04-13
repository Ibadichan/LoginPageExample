import React from "react";
import classNames from "classnames";

function RadioGroup(props) {
  const {
    type,
    className,
    children,
    $error,
  } = props;

  return (
    <fieldset
      className={classNames("radio-group", `radio-group_${type}`, className)}
    >
      {children}
      {$error && <aside className="radio-group__error">{$error}</aside>}
    </fieldset>
  );
}

RadioGroup.defaultProps = {
  type: "primary",
};

export default RadioGroup;
