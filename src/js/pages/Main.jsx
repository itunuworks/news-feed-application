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
      <div className="ui large top fixed hidden menu inverted">
        <div className="ui container">
          <a className="active item" href="/#/main">Main</a>
          <a className="item" href="/#/favorites">My Lists</a>
          <div className="right menu">
            <div className="item">
              <Button onClick={newsActions.signOut}>Sign Out</Button>
            </div>
          </div>
        </div>
      </div>
      <h1
        className="ui center aligned block inverted header"
        style={{ marginBottom: '0px', marginTop: '80px' }}
      >NEWS ON DEMAND
        <div className="sub header">
          <small><i>exposition at its best...</i></small>
        </div>
      </h1>
      <hr />
      <div />
      <Sources />
      <Articles />
      <div className="ui bottom fixed menu">
        <div className="ui container center aligned">
          copyright
        </div>
      </div>
    </div>
  </div>
);

export default Main;
