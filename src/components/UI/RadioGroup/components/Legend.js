import React from "react";
import classNames from "classnames";

function Legend(props) {
  const { className, children } = props;

  return (
    <legend {...props} className={classNames("radio-group__legend", className)}>
      {children}
    </legend>
  );
}

export default Legend;
