import React from 'react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';

export default class Main extends React.Component{
  constructor(props) {
    super();
  }

  render() {
    return (
      <h1>Hi, I am the MAIN page</h1>
    );
  }
}