import React from "react";
import classNames from "classnames";
import "./style.css";

const Button = (props) => {
  const {
    $type,
    $component,
    $append,
    $prepend,
    $hideText,

    type,
    className,

    children,
  } = props;

  const nodeProps = {
    ...props,
    className: classNames("button", className, {
      [`button_${$type}`]: $type && !$hideText,
      "button_for-service": $hideText,
    }),
    type: $component === "button" ? type : undefined,
  };

  return (
    <props.$component {...nodeProps}>
      {$prepend && <span className="button__prepend">{$prepend}</span>}

      {$hideText ? (
        <span className="visually-hidden">{children}</span>
      ) : (
        children
      )}

      {$append && <span className="button__append">{$append}</span>}
    </props.$component>
  );
};

Button.defaultProps = {
  $type: "primary",
  $component: "button",

  type: "button",
};

export default Button;
