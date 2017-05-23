import React from 'react';
import { Button } from 'semantic-ui-react';
import Sources from '../components/Sources';
import Articles from '../components/Articles';
import * as newsActions from '../actions/newsActions';

/**
 * This function returns the Main component which displays and houses
 * other components used in displaying the projects Main page.
 *
 * @function Main
 * @export
 * @returns (JSX)
 */
const Main = () => (
  <div>
    <div className="ui container">
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
      <h1 className="ui center aligned header">NEWS ON DEMAND <small>
        <i>exposition at its best...</i></small>
      </h1>
      <div />
      <Sources />
      <Articles />
    </div>
  </div>
);

export default Main;
