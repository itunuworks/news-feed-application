import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Main from './Main';
import Layout from './Layout';
import newsStore from '../store/newsStore';

/*
const clientId = '5132228650-521v0qouoj8iv6uqr6od6m8v9hiv906m.apps.googleusercontent.com';
Try not to hardcode this. Also use the ENV property.
*/

export default class Parent extends React.Component {
constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    newsStore.on('authChanged', this.getUser.bind(this));
  }

  componentWillUnmount() {
    newsStore.removeListener('authChanged', this.getUser.bind(this));
  }

  getUser(user) {
    this.setState(user: newsStore.user);
  }

  render() {
    return(
      <HashRouter>
        <Layout>
          <Switch>
            <Route path="/" component={newsStore.user ? Main : Home} />
            <Route path="/main" component={newsStore.user ? Main : Home} />
          </Switch>
        </Layout>
      </HashRouter>
   	);
  }
}