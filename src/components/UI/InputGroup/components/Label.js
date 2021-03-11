import React from "react";
import classNames from "classnames";

function Label(props) {
  const { className, children } = props;

  return (
    <label {...props} className={classNames("input-group__label", className)}>
      {children}
    </label>
  );
}

export default Label;
