import React from 'react';
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
    <h1>Hi, I am the List view page</h1>
    <button onClick={newsActions.signOut}>Sign Out</button>
  </div>
);

export default ListView;

