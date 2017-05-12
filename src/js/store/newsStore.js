import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/*
Store to handle all data requests and
recieve all dispatch broadcasts and payload.
*/
class NewsStore extends EventEmitter {
  constructor() {
    super();

    // Setup default states of the store.
    this.articles = [];
    this.sources = [];
    this.user = null;
  }

  // Return the current state of the articles in store.
  fetchArticles() {
    return this.articles;
  }

  // Return the current state of the sources in store.
  fetchSources() {
    return this.sources;
  }

  // Return the current user in store.
  getUser() {
    return this.user;
  }

  /*
  Handle all events from the dispatcher and resolve
  recieved data into the respective state.
  Also emit an even to alert component on the completion of data resolution.
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
        console.log('Emitting userAuthChanged', action.user);
        break;
      }
      default: {
        console.log('Wetin Happen?');
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
