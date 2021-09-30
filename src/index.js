import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory from './components/Auth0Provider'

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById('root')
);
