import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
  domain="dev-togo-237.us.auth0.com"
  clientId="9DDsYy3zyxhoPqHY29OXFTkjeoLs3Bfp"
  redirectUri={'/Home'}
  >
<App />
</Auth0Provider>
</BrowserRouter>,
document.getElementById('root')
);

// redirect is the issue