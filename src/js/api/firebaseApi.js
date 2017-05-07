import * as firebase from 'firebase';
import { authStateChangedHandler } from '../actions/newsActions';

class Firebase {
  constructor() {
    this.firebase = firebase;
    this.initializeApp();
  }

  initializeApp() {
    this.firebase.initializeApp({
      apiKey: 'AIzaSyC0rOpMhEtIqP-XRKn0MT7jGhc8013AiOU',
      authDomain: 'news-feed-application-166302.firebaseapp.com',
      databaseURL: 'https://news-feed-application-166302.firebaseio.com',
      projectId: 'news-feed-application-166302',
      storageBucket: 'news-feed-application-166302.appspot.com',
      messagingSenderId: '5132228650',
    });
    console.log('Firebase just got initialized');
    this.provider = new this.firebase.auth.GoogleAuthProvider();
    this.provider.addScope('');
    // this.firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
    this.firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      console.log(this.firebase.auth());
      authStateChangedHandler(user);
    });
    this.signIn.bind(this);
    this.signOut.bind(this);
  }

  signIn() {
    this.firebase.auth().signInWithPopup(this.provider)
    .then((result) => {
      console.log(result);
    });
  }

  getCurrentUser() {
    return this.firebase.auth().currentUser;
  }

  signOut() {
    this.firebase.auth().signOut()
      .then((result) => {
        console.log(result);
      });
  }

  createUserList(listName) {
    console.log(`I am creating a new user list named ${listName}`);
  }

  addArticleToList(listName, url) {
    console.log(`The article with url: ${url} is added to list: ${listName}`);
  }

  deleteUserList(listName) {
    console.log(`I am deleting a new user list named ${listName}`);
  }

  onAuthStateChanged(user) {
    console.log(this.firebase.auth());
    console.log('onAuthStateChanged just got fired');
    console.log(user);
  }
}

const firebaseInstance = new Firebase();
export default firebaseInstance;
