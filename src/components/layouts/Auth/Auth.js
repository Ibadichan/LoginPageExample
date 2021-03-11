import React from "react";
import "./style.css";

function AuthLayout(props) {
  const { header, children } = props;

  return (
    <main className="auth-layout">
      <div className="container">
        <h1 className="auth-layout__header">{header}</h1>
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
