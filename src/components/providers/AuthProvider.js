import React, { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "contexts/AuthContext";
import { requests } from "api";

function AuthProvider(props) {
  const { children } = props;

  const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
  const [isCurrentUserIndeterminated, setIsCurrentUserIndeterminated] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const authToken = cookies["auth-token"];

    if (authToken && !currentUser) {
      requests.users
        .getCurrentUser()
        .then((response) => setCurrentUser(response.body))
        .catch(console.dir)
        .finally(() => setIsCurrentUserIndeterminated(false))
    } else {
      setIsCurrentUserIndeterminated(false);
    }
  }, [cookies, currentUser]);

  const rememberAuthToken = useCallback((token) => {
    setCookie("auth-token", token, {
      path: "/",
    });
  }, [setCookie]);

  const signOut = useCallback(() => {
    removeCookie("auth-token");
    setCurrentUser(null);
  }, [removeCookie]);

  const childrenProps = {
    currentUser,
    signOut,
    rememberAuthToken,
    isCurrentUserIndeterminated,
  };

  return (
    <AuthContext.Provider value={childrenProps}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
