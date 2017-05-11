import React from 'react';
import Sources from '../components/Sources';
import Articles from '../components/Articles';
import * as newsActions from '../actions/newsActions';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi, I am the MAIN page</h1>
        <button onClick={newsActions.signOut}>Sign Out</button>
        <Sources />
        <Articles />
      </div>
    );
  }
}
