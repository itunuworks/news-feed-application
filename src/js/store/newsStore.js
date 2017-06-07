import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * This Store is to handle all data requests and
 * recieve all dispatch broadcasts and payload.
 *
 * @class NewsStore
 * @extends {EventEmitter}
 */
class NewsStore extends EventEmitter {
  /**
   * Creates an instance of NewsStore.
   *
   * @memberof NewsStore
   */
  constructor() {
    super();

    // Setup default states of the store.
    this.articles = [];
    this.sources = [];
    this.user = null;
  }

  /**
   * This function returns the current state of the articles in store.
   *
   * @returns {array} articles
   * @function fetchArticles
   * @memberof NewsStore
   */
  fetchArticles() {
    return this.articles;
  }

  /**
   * This function returns the current state of the sources in store.
   *
   * @returns {array} sources
   * @function fetchSources
   * @memberof NewsStore
   */
  fetchSources() {
    return this.sources;
  }

  /**
   * This function returns the current state of the user in store.
   *
   * @function getUser
   * @returns {GoogleUser} user
   * @memberof NewsStore
   */
  getUser() {
    return this.user;
  }

  /**
   *  Handle all events from the dispatcher and resolve
   *  recieved data into the respective state.
   *  Also emit an even to alert component on the completion of data resolution.
   *
   * @param {object} action - The action carried out by app.
   * @method implementActions
   * @returns {void}
   * @memberof NewsStore
   */
  implementActions(action) {
    switch (action.type) {
      // Handle GET_ARTICLES and resolve articles.
      case 'GET_ARTICLES': {
        this.articles = action.articles;
        this.emit('articlesChanged');
        break;
      }
      // Handle GET_SOURCES and resolve sources.
      case 'GET_SOURCES': {
        this.sources = action.sources;
        this.emit('sourcesChanged');
        break;
      }
      // Handle AUTH_CHANGED and resolve user.
      case 'AUTH_CHANGED': {
        this.user = action.user;
        this.emit('authChanged');
        break;
      }
      case 'AUTH PENDING': {
        this.emit('authPending');
        break;
      }
      default: {
        break;
      }
    }
  }
}

/* Create a new store, register it with the
dispatcher and export it for use in Components.
*/
const newsStore = new NewsStore();
dispatcher.register(newsStore.implementActions.bind(newsStore));

export default newsStore;
