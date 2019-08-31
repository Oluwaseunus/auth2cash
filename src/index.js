import React from 'react';
import { render } from 'react-dom';

import { Auth0Provider } from './utils/oauth';
import config from './utils/auth_config.json';
import Routes from './components/Routes/Routes';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
    <Routes />
  </Auth0Provider>,
  document.getElementById('root')
);
