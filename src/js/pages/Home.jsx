import React from 'react';
import * as newsActions from '../actions/newsActions';

// This component holds the home page, sign in and sign out details.
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi, I am the HOME page</h1>
        <button onClick={newsActions.signIn}>Sign In</button>
      </div>
    );
  }
}
