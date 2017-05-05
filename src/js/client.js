import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './pages/layout';
import Home from './pages/Home';
import Main from './pages/Main';

const app = document.getElementById('app');
ReactDOM.render(
  <HashRouter>
    <Layout>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/main" component={Main} />
      </Switch>
    </Layout>
  </HashRouter>, app,
);
