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
      apiKey: process.env.FIREBASE_API_KEY || 'default',
      authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'default',
      databaseURL: process.env.FIREBASE_DATABASE_URL || 'default',
      projectId: process.env.FIREBASE_PROJECT_ID || 'default',
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'default',
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || 'default',
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
   * @function getCurrentUser
   * @returns {GoogleUser} currentUser
   * @memberof Firebase
   */
  getCurrentUser() {
    return this.firebase.auth().currentUser;
  }

  /**
   * This method signs out the current user.
   *
   * @function signOut
   * @returns {void}
   * @memberof Firebase
   */
  signOut() {
    this.firebase.auth().signOut();
  }
}

const firebaseInstance = new Firebase();
export default firebaseInstance;
