import React from 'react';
import Sources from '../components/Sources';
import Articles from '../components/Articles';
import GoogleLogin from 'react-google-login';

export default class Layout extends React.Component{
  constructor() {
    super();
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Hello Everyone, I am a news apps.</h1>
        <GoogleLogin
          clientId='5132228650-521v0qouoj8iv6uqr6od6m8v9hiv906m.apps.googleusercontent.com'
          buttonText="Login"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
        />
        <Sources/>
        <Articles/>
      </div>
    );
  }
}

const responseGoogleSuccess = (response) => {
  console.log(`Logged in as : ${response.profileObj.name}`);
}

const responseGoogleFailure = (response) => {
  console.log(response);
}