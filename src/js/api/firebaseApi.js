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
   */
  initializeApp() {
    this.firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
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
   * @memberof Firebase
   */
  signIn() {
    this.firebase.auth().signInWithRedirect(this.provider);
  }

  /**
   * This method gets the current logged in user.
   *
   * @returns {GoogleUser} currentUser
   * @function getCurrentUser
   * @memberof Firebase
   */
  getCurrentUser() {
    return this.firebase.auth().currentUser;
  }

  /**
   * This method signs out the current user.
   * @function signOut
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
