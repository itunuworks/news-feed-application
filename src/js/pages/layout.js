import React from 'react';
import Sources from '../components/Sources';
import Articles from '../components/Articles';

export default class Layout extends React.Component{
  constructor() {
    super();
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Hello Everyone, I am a news apps.</h1>
        <Sources/>
        <Articles/>
      </div>
    );
  }
}

