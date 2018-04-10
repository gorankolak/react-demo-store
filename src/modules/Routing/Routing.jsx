import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, Home } from 'modules';

// Initialize history
const history = createHistory();

const Routing = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routing;