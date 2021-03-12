import React from "react";
import classNames from "classnames";
import "./style.css";

function AuthLayout(props) {
  const { className, header, children } = props;

  return (
    <main className={classNames("auth-layout", className)}>
      <div className="auth-layout__inner container">
        <h1 className="auth-layout__header">{header}</h1>
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
