import dispatcher from '../dispatcher';
import NewsApi from '../api/newsAPI';
import firebaseApi from '../api/firebaseApi';

/**
 * This function handles the signIn event.
 *
 * @export signIn
 */
export function signIn() {
  firebaseApi.signIn();
}

/**
 * This function handles the signOut event.
 *
 * @export signOut
 */
export function signOut() {
  firebaseApi.signOut();
}

/**
 * This function captures the authStateChanged event from the firebaseApi
 * and resolves the new user.
 * @export authStateChangedHandler
 * @param {object} user - The current signed in User. Undefined if signed Out.
 */
export function authStateChangedHandler(user) {
  dispatcher.dispatch({
    type: 'AUTH_CHANGED',
    user,
  });
}

/**
 * This function requests for articles from the NewsApi
 * using the source and sortby params, the returns same
 * once api is done fetching.
 * It also dispatches the GET_ARTICLES message and fetched articles.
 * @export getArticles
 * @param {String} source - Id of the news source.
 * @param {String} sortBy - Type of sort required.
 */
export function getArticles(source, sortBy) {
  NewsApi.getArticles(source, sortBy, (articles) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles,
    });
  });
}

/**
 * This function requests for available sources from the NewsApi,
 * It recieves the sources and dispatches them to the store.
 * @export getSources
 */
export function getSources() {
  NewsApi.getSources((sources) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      sources,
    });
  });
}
