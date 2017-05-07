import dispatcher from '../dispatcher';
import NewsApi from '../api/newsAPI';
import firebaseApi from '../api/firebaseApi';

// const auth = firebaseApi.auth();
// const database = firebaseApi.database();
export function signIn() {
  firebaseApi.signIn();
}

export function signOut() {
  firebaseApi.signOut();
}

export function authStateChangedHandler(user) {
  if (user) {
    dispatcher.dispatch({
      type: 'USER_SIGNED_IN',
      user,
    });
  }
  else {
    dispatcher.dispatch({
      type: 'USER_SIGNED_OUT',
    });
  }
}

window.signIn = firebaseApi.signIn.bind(firebaseApi);
window.signOut = firebaseApi.signOut.bind(firebaseApi);
window.getInstance = firebaseApi.getCurrentUser.bind(firebaseApi);

export function getArticles(source, sortBy) {
  NewsApi.getArticles(source, sortBy, (data) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data,
    });
  });
}

export function getSources() {
  NewsApi.getSources((data) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      data,
    });
  });
}
