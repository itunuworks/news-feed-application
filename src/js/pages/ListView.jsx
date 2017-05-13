import React from 'react';
import * as newsActions from '../actions/newsActions';

export default class ListView extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi, I am the List view page</h1>
        <button onClick={newsActions.signOut}>Sign Out</button>
      </div>
    );
  }
}
