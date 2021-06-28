import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { PortfolioContextProvider } from './store/portfolioContext';
import ProtectedRoute from './auth/protected-route';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume/Resume';
import Admin from './pages/Admin';
import Loading from './components/Loading/Loading';

import './index.css';
import './accessibility.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPen,
  faPhoneAlt,
  faMapMarkerAlt,
  faUserCircle,
  faPrint,
  faBars,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faPen,
  faPhoneAlt,
  faMapMarkerAlt,
  faUserCircle,
  faPrint,
  faBars,
  faSuitcase
);

const App = (props) => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PortfolioContextProvider>
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <ProtectedRoute path="/admin" component={Admin} />
      </Switch>
    </PortfolioContextProvider>
  );
};

export default App;
