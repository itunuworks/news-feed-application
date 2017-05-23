import React from 'react';
import * as newsActions from '../actions/newsActions';

/**
 * This component holds the home page, sign in and sign out details.
 *
 * @export
 * @function Home
 * @returns {JSX Component}
 */
const Home = () => (
  <div>
    <h1>Hi, I am the HOME page</h1>
    <button onClick={newsActions.signIn}>Sign In</button>
  </div>
);

export default Home;
