import dispatcher from '../dispatcher';
import NewsApi from '../api/newsAPI';
import firebaseApi from '../api/firebaseApi';

// Handle the signIn event.
export function signIn() {
  firebaseApi.signIn();
}

// Handle the signOut event.
export function signOut() {
  firebaseApi.signOut();
}

// Recieve authStateChanged event from the firebaseApi and resolve the new user.
export function authStateChangedHandler(user) {
  dispatcher.dispatch({
    type: 'AUTH_CHANGED',
    user,
  });
}

window.signIn = firebaseApi.signIn.bind(firebaseApi);
window.signOut = firebaseApi.signOut.bind(firebaseApi);
window.getInstance = firebaseApi.getCurrentUser.bind(firebaseApi);

/*
Request for articles from the NewsApi and recieve
same once api is done fetching.
Also dispatch the GET_ARTICLES message and fetched articles.
*/
export function getArticles(source, sortBy) {
  NewsApi.getArticles(source, sortBy, (articles) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles,
    });
  });
}

/*
Request for sources from the NewsApi and recieve same once api is done fetching.
Also dispatch the GET_SOURCES message and fetched sources.
*/
export function getSources() {
  NewsApi.getSources((sources) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      sources,
    });
  });
}
