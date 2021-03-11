import React from "react";
import classNames from "classnames";

function InputGroup(props) {
  const { type, className, children } = props;

  return (
    <div
      className={classNames("input-group", `input-group_${type}`, className)}
    >
      {children}
    </div>
  );
}

InputGroup.defaultProps = {
  type: "primary",
};

export default InputGroup;
