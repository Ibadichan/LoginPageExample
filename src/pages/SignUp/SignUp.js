import React from "react";
import { Link } from "react-router-dom";
import { signInPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";

function SignUpPage() {
  return (
    <AuthLayout header="Enter your details to create an account">
      <form id="sign-up-form" noValidate>
        <p>
          <label className="visually-hidden" htmlFor="email-field">
            Enter your email:
          </label>
          <input type="email" id="email-field" />
        </p>

        <p>
          <label className="visually-hidden" htmlFor="password-field">
            Enter your password:
          </label>

          <span>
            <input type="password" id="password-field" />
            <button type="button">
              Show
              <span className="visually-hidden"> the entered password</span>
            </button>
          </span>
        </p>

        <p>
          <label
            className="visually-hidden"
            htmlFor="password-confirmation-field"
          >
            Confirm your password:
          </label>

          <span>
            <input type="password" id="password-confirmation-field" />
            <button type="button">
              Show
              <span className="visually-hidden"> the entered password</span>
            </button>
          </span>
        </p>
      </form>

      <footer className="auth-pages-footer">
        <button type="submit" form="sign-up-form">
          Create new account
        </button>
        <Link to={signInPath()}>Sign in</Link>
      </footer>
    </AuthLayout>
  );
}

export default SignUpPage;
