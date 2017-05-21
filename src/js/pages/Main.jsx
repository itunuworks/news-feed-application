import React from 'react';
import { Button } from 'semantic-ui-react';
import Sources from '../components/Sources';
import Articles from '../components/Articles';
import * as newsActions from '../actions/newsActions';

export default function Main() {
  return (
    <div>
      <div className="ui large top hidden menu">
        <div className="ui container">
          <a className="item" href="/#/home">Home</a>
          <a className="active item" href="/#/main">Main</a>
          <a className="item" href="/#/favorites">My Lists</a>
          <div className="right menu">
            <div className="item">
              <Button primary onClick={newsActions.signOut}>Sign Out</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ui container text">
        <h1>NEWS HUB <small>
          <i>Multidimensional news on demand...</i></small>
        </h1>
        <div />
        <Sources />
        <Articles />
      </div>
    </div>
  );
}
