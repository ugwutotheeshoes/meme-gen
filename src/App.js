import React from 'react';
import './App.css';
import LogoutButton from './components/Logout';
import LoginButton from './components/Login';
import Loading from './components/Loading';
import Generate from './components/Generate';
import Error from './components/Error';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (isLoading) {
      return <Loading />
  }

  return (
      <main className="main">
        <div className="title">
          <h2>meme generator</h2>
          <div className="btn">
            { isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
        <div className="container">
          { isAuthenticated ? <Generate /> : <Error /> }
        </div>
      </main>
    );
}

export default App;
