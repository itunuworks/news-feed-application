import * as firebase from 'firebase';
import { authStateChangedHandler } from '../actions/newsActions';

/**
 * This class represents the capabilities and properties of firebase
 *
 * @class Firebase
 */
class Firebase {
  /**
   * Creates an instance of Firebase.
   *
   * @memberof Firebase
   */
  constructor() {
    this.firebase = firebase;
    this.initializeApp();
  }

  /**
   * This method initializes the firebase app.
   *
   * @memberof Firebase
   * @returns {void}
   */
  initializeApp() {
    this.firebase.initializeApp({
      apiKey: 'AIzaSyCI4rndHukYUe_FGD4Np2VIy64S9cXu_8Y',
      authDomain: 'my-news-project-167300.firebaseapp.com',
      databaseURL: 'https://my-news-project-167300.firebaseio.com',
      projectId: 'my-news-project-167300',
      storageBucket: 'my-news-project-167300.appspot.com',
      messagingSenderId: '575633828507',
    });

    this.provider = new this.firebase.auth.GoogleAuthProvider();
    this.provider.addScope('');
    // Register the action authStateChangedHandler to handler auth state events.
    this.firebase.auth().onAuthStateChanged((user) => {
      authStateChangedHandler(user);
    });
    this.signIn.bind(this);
    this.signOut.bind(this);
  }

  /**
   * This function signs in a user with Google authentication
   *
   * @function signIn
   * @returns {void}
   * @memberof Firebase
   */
  signIn() {
    this.firebase.auth().signInWithRedirect(this.provider);
  }

  /**
   * This method gets the current logged in user.
   *
   * @returns {object} currentUser
   * @function getCurrentUser
   * @memberof Firebase
   */
  getCurrentUser() {
    return this.firebase.auth().currentUser;
  }

  /**
   * This method signs out the current user.
   * @function signOut
   * @returns {void}
   * @memberof Firebase
   */
  signOut() {
    this.firebase.auth().signOut();
  }
/*
  createUserList(listName) {
    console.log(`I am creating a new user list named ${listName}`);
  }

  addArticleToList(listName, url) {
    console.log(`The article with url: ${url} is added to list: ${listName}`);
  }

  deleteUserList(listName) {
    console.log(`I am deleting a new user list named ${listName}`);
  }
*/
}

const firebaseInstance = new Firebase();
export default firebaseInstance;
