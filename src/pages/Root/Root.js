import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { signInPath, signUpPath } from "helpers/routes";
import AuthLayout from "components/layouts/Auth";
import CurrentUserDetails from "components/common/CurrentUserDetails";
import AuthContext from "contexts/AuthContext";
import AuthPagesFooter from "./components/AuthPagesFooter";
import Button from "components/UI/Button";

function RootPage() {
  const {
    isCurrentUserIndeterminated,
    currentUser,
    signOut,
  } = useContext(AuthContext);

  if (isCurrentUserIndeterminated) {
    return <AuthLayout />;
  }

  return (
    <AuthLayout
      header={
        currentUser
          ? `Hello, ${currentUser.profile.email.address}`
          : "Welcome to the our app."
      }
    >
      {currentUser ? (
        <>
          <CurrentUserDetails user={currentUser} />

          <Button
            $type="tertiary"
            onClick={signOut}
          >
            Sign out
          </Button>
        </>
      ) : (
        <AuthPagesFooter
          actions={[
            <Button $component={Link} to={signInPath()}>
              Sign in
            </Button>,
            <Button $type="tertiary" $component={Link} to={signUpPath()}>
              New account
            </Button>,
          ]}
        />
      )}
    </AuthLayout>
  );
}

export default RootPage;
