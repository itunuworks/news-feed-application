import React from 'react';
import { Button, Container } from 'semantic-ui-react';
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
    <Container>
      <div className="ui large top hidden menu">
        <div className="ui container">
          <a className="active item" href="/#/home">Home</a>
          <a className="item" href="/#/main">Main</a>
          <a className="item" href="/#/favorites">My Lists</a>
        </div>
      </div>
      <h1
        className="ui center aligned header"
        style={{ marginTop: '50px' }}
      >Welcome to NEWS ON DEMAND!!!</h1>
      <h3 className="ui center aligned header">Sign in to begin.</h3>
      <span>
        <Button
          size="massive"
          fluid primary
          onClick={newsActions.signIn}
          style={{ width: '200px', margin: 'auto', marginTop: '40px' }}
        >
          Sign In
        </Button>
      </span>
    </Container>
  </div>
);

export default Home;
