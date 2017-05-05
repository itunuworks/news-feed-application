import React from 'react';
import Sources from '../components/Sources';
import Articles from '../components/Articles';

/*
const clientId = '5132228650-521v0qouoj8iv6uqr6od6m8v9hiv906m.apps.googleusercontent.com';
Try not to hardcode this. Also use the ENV property.
*/

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <Sources />
        <Articles />
      </div>
    );
  }
}

// const responseGoogleSuccess = (response) => {
//   console.log(`Logged in as : ${response.profileObj.name}`);
//   console.log(response);
// }

// const responseGoogleFailure = (response) => {
//   console.log(response);
// }
