import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import Main from './Main';
import Layout from './Layout';
import ListView from './ListView';
import newsStore from '../store/newsStore';

/**
 * This class renders a Parent component which helps with
 * housing other components and front-end routing.
 *
 * @export
 * @class Parent
 * @extends {React.Component}
 */
export default class Parent extends React.Component {
  /**
   * Creates an instance of Parent.
   *
   * @memberof Parent
   */
  constructor() {
    super();
    // Setup initial user logIn state.
    this.state = {
      user: null,
    };
  }

  /*
  On component mount, set a listener to the authChanged
  event and use it to get the current user state.
  */
  componentWillMount() {
    newsStore.on('authChanged', this.getUser.bind(this));
  }

  // Remove the added listener once the component is unmounted.
  componentWillUnmount() {
    newsStore.removeListener('authChanged', this.getUser.bind(this));
  }

  /**
   * This function Fetches user state from the store and sets it on this.state.
   *
   * @function getUser
   * @memberof Parent
   */
  getUser() {
    this.setState({
      user: newsStore.user,
    });
  }

  /**
   * Returns a route based on the current user state.
   * If the user is signed In, it routes user to Main page.
   * Else, it re-routes user to the Home page.
   *
   **/
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route
              exact path="/" render={() => <Redirect to="/home" />}
            />
            <Route
              path="/home" render={() => (
                this.state.user ? (
                  <Redirect to="/main" />
                ) : (
                  <Home />
                )
              )}
            />
            <Route
              path="/main" render={() => (
                this.state.user ? (
                  <Main new="true" />
                ) : (
                  <Redirect to="/home" />
                )
              )}
            />
            <Route
              path="/favorites" render={() => (
                this.state.user ? (
                  <ListView />
                ) : (
                  <Redirect to="/home" />
                )
              )}
            />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}
