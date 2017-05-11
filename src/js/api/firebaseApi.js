import * as firebase from 'firebase';
import { authStateChangedHandler } from '../actions/newsActions';

class Firebase {
  constructor() {
    this.firebase = firebase;
    this.initializeApp();
  }

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
    // this.firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
    this.firebase.auth().onAuthStateChanged((user) => {
      authStateChangedHandler(user);
    });
    this.signIn.bind(this);
    this.signOut.bind(this);
  }

  signIn() {
    this.firebase.auth().signInWithRedirect(this.provider)
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
