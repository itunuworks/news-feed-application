import React from 'react';
import { Button } from 'semantic-ui-react';
import * as newsActions from '../actions/newsActions';

/**
 * This function returns the Listview component which displays
 * The private lists built in the app.
 *
 * @function ListView
 * @export
 * @returns {JSX Component}
 */
const ListView = () => (
  <div>
    <div className="ui large top hidden menu">
      <div className="ui container">
        <a className="item" href="/#/home">Home</a>
        <a className="item" href="/#/main">Main</a>
        <a className="active item" href="/#/favorites">My Lists</a>
        <div className="right menu">
          <div className="item">
            <Button primary onClick={newsActions.signOut}>Sign Out</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListView;

