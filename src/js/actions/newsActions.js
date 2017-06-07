import dispatcher from '../dispatcher';
import NewsApi from '../api/newsAPI';
import firebaseApi from '../api/firebaseApi';

/**
 * This function handles the signIn event.
 *
 * @function signIn
 * @returns {void}
 * @export signIn
 */
export const signIn = () => {
  firebaseApi.signIn();
  dispatcher.dispatch({
    type: 'AUTH_PENDING',
  });
};

/**
 * This function handles the signOut event.
 *
 * @function signOut
 * @returns {void}
 * @export signOut
 */
export const signOut = () => {
  firebaseApi.signOut();
};

/**
 * This function captures the authStateChanged event from the firebaseApi
 * and resolves the new user.
 *
 * @function authStateChangedHandler
 * @export authStateChangedHandler
 * @returns {void}
 * @param {GoogleUser} user - The current signed in user.
 */
export const authStateChangedHandler = (user) => {
  dispatcher.dispatch({
    type: 'AUTH_CHANGED',
    user,
  });
};

/**
 * This function requests for articles from the NewsApi
 * using the source and sortby params, the returns same
 * once api is done fetching.
 * It also dispatches the GET_ARTICLES message and fetched articles.
 *
 * @function getArticles
 * @export getArticles
 * @returns {void}
 * @param {string} sourceId - Id of the news source.
 * @param {string} sortBy - Type of sort required.
 */
export const getArticles = (sourceId, sortBy) => {
  NewsApi.getArticles(sourceId, sortBy, (articles) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles,
    });
  });
};

/**
 * This function requests for available sources from the NewsApi,
 * It recieves the sources and dispatches them to the store.
 *
 * @function getSources
 * @returns {void}
 * @export getSources
 */
export const getSources = () => {
  NewsApi.getSources((sources) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      sources,
    });
  });
};
