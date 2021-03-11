import React from "react";
import "./style.css";

function AuthPagesFooter(props) {
  const { actions } = props;

  return (
    <footer className="auth-pages-footer">
      <ul className="auth-pages-footer__action-list">
        {actions.map((action, i) => (
          <li className="auth-pages-footer__action" key={i}>
            {action}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default AuthPagesFooter;
