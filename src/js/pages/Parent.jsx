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
      authPending: true,
    };
  }

  /**
   * This function, on component mount, sets a listener to the authChanged
   * event and uses it to get the current user state.
   *
   * @function componentWillMount
   * @returns {void}
   * @memberof Parent
   */
  componentWillMount() {
    newsStore.on('authChanged', this.getUser.bind(this));
    newsStore.on('authPending', this.setPendingState);
    window.localStorage.setItem(
      'showPlaceholder', true
    );
  }

  // Remove the added listener once the component is unmounted.
  /**
   * This function, on component mount, sets a listener to the authChanged
   * event and uses it to get the current user state.
   *
   * @function componentWillMount
   * @returns {void}
   * @memberof Parent
   */
  componentWillUnmount() {
    newsStore.removeListener('authChanged');
    newsStore.removeListener('authPending');
  }

  /**
   * This function Fetches user state from the store and sets it on this.state.
   *
   * @function getUser
   * @memberof Parent
   * @returns {void}
   */
  getUser() {
    this.setState({
      user: newsStore.user,
      authPending: false,
    });
  }

  /**
   * This function sets the state to of authPending to true
   *
   * @function setPendingState
   * @returns {void}
   * @memberof Parent
   */
  setPendingState() {
    this.setState({
      authPending: true,
    });
  }

  /**
   * Returns a route based on the current user state.
   * If the user is signed In, it routes user to Main page.
   * Else, it re-routes user to the Home page.
   *
   * @function render
   * @returns {object} - A React component
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
                  <Home pendingState={this.state.authPending} />
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
