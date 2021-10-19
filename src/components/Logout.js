import React from "react";

const LogoutButton = ({ logout }) => {
  return (
    <button className="logout" onClick={() => logout()}>
      Log Out
    </button>
  );
};

export default LogoutButton;
