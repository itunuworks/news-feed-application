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
      <div className="ui large top fixed inverted hidden menu">
        <div className="ui container">
          <a className="active item" href="/#/home">Home</a>
        </div>
      </div>
      <h1
        className="ui center aligned header"
        style={{ marginTop: '200px', fontSize: '-webkit-xxx-large' }}
      >NEWS ON DEMAND!!!</h1>
      <h3 className="ui center aligned header">
        Sign in <b className="ui red header">with Google </b>to begin.
      </h3>
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
      <div className="ui bottom fixed menu">
        <div className="ui container center aligned">
          copyright
        </div>
      </div>
    </Container>
  </div>
);

export default Home;
