import React from 'react';
import Sources from '../components/Sources';
import Articles from '../components/Articles';
import GoogleLogin from 'react-google-login';

const clientId = '5132228650-521v0qouoj8iv6uqr6od6m8v9hiv906m.apps.googleusercontent.com';

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
          clientId={clientId}
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
  console.log(response);
}

const responseGoogleFailure = (response) => {
  console.log(response);
}