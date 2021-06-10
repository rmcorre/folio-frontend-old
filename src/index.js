import './sass/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import 'bootstrap/scss/bootstrap.scss';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';

// import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
// import '../node_modules/mdbreact/dist/css/mdb.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
