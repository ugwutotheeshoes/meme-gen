import "./App.css";
import LogoutButton from "./components/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import LoginButton from "./components/Login";
import Generate from "./components/Generate";
import Error from "./components/Error";

export default function App() {
  const { isLoading, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="main">
      <div className="title">
        <h2>meme generator</h2>
        <div className="btn">
          {isAuthenticated ? (
            <LogoutButton logout={logout} />
          ) : (
            <LoginButton loginWithRedirect={loginWithRedirect} />
          )}
        </div>
      </div>
      <div className="container">
        {isAuthenticated ? <Generate /> : <Error />}
      </div>
    </main>
  );
}
