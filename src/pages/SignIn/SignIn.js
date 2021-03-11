import React from "react";
import { Link } from "react-router-dom";
import { signUpPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";

function SignInPage() {
  return (
    <AuthLayout header="Please log in to your account">
      <form id="sign-in-form" noValidate>
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
      </form>

      <footer className="auth-pages-footer">
        <button type="submit" form="sign-in-form">
          Sign in
        </button>
        <Link to={signUpPath()}>New account</Link>
      </footer>
    </AuthLayout>
  );
}

export default SignInPage;
