import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Dimmer, Header, Icon } from 'semantic-ui-react';
import * as newsActions from '../actions/newsActions';

/**
 * This component holds the home page, sign in and sign out details.
 *
 * @export
 * @function Home
 * @param {any} props - props for the component
 * @returns {object} - A react component is rendered
 */
const Home = props => (
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
      <Dimmer active={props.pendingState}>
        <Header as="h2" icon inverted>
          <Icon name="coffee" />
          Logging you in, please wait...
        </Header>
      </Dimmer>
    </Container>
  </div>
);

Home.propTypes = {
  pendingState: PropTypes.bool.isRequired,
};

export default Home;
