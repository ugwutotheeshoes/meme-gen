import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({children}) =>{
    const history =useHistory();
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    const redirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname)
        console.log(window.location.origin)
    }
return(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    redirectCallback={redirectCallback}>
        {children}
    </Auth0Provider>
)
}

export default Auth0ProviderWithHistory 