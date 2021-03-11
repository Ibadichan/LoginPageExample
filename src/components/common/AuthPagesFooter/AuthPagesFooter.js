import React from "react";
import "./style.css";

function AuthPagesFooter(props) {
  const { actions } = props;

  return (
    <footer className="auth-pages-footer">
      <ul className="auth-pages-footer__action-list">
        {actions.map((action) => (
          <li className="auth-pages-footer__action">{action}</li>
        ))}
      </ul>
    </footer>
  );
}

export default AuthPagesFooter;
