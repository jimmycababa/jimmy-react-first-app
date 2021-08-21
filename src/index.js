import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


ReactDOM.render(
    <Auth0Provider
    domain="dev-togo-237.us.auth0.com"
    clientId="9DDsYy3zyxhoPqHY29OXFTkjeoLs3Bfp"
    redirectUri={window.location.origin}
  >
<App />
</Auth0Provider>,
document.getElementById('root')
);

