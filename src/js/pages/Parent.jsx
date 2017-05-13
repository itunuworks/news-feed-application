import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Main from './Main';
import Layout from './Layout';
import ListView from './ListView';
import newsStore from '../store/newsStore';

// Create a Parent component which helps with
// housing other components and front-end routing.
export default class Parent extends React.Component {
  constructor() {
    super();
    // Setup initial user logIn state.
    this.state = {
      user: null,
    };
  }

  /* On component mount, set a listener to the authChanged
     event and use it to get the current user state. */
  componentWillMount() {
    newsStore.on('authChanged', this.getUser.bind(this));
  }

  // Remove the added listener once the component is unmounted.
  componentWillUnmount() {
    newsStore.removeListener('authChanged', this.getUser.bind(this));
  }

  // Fetches current user state from the store and sets it on this.state.
  getUser() {
    this.setState({
      user: newsStore.user,
    });
  }

  /* Returns a route based on the current user state.
     If the user is signed In, it routes user to Main page.
     Else, it re-routes user to the Home page. */
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route path="/home" component={this.state.user ? Main : Home} />
            <Route path="/main" component={this.state.user ? Main : Home} />
            <Route
              path="/favorites" component={this.state.user ? ListView : Home}
            />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}
