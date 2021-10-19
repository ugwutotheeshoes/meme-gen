import React from "react";

const LoginButton = ({ loginWithRedirect }) => {
  return (
    <button className="login" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
