import React from "react";
import classNames from "classnames";

function List(props) {
  const { className, children } = props;

  return (
    <ul {...props} className={classNames("radio-group__list", className)}>
      {children}
    </ul>
  );
}

export default List;
