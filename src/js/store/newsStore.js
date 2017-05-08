import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.sources = [];
    this.user = null;
  }

  fetchArticles() {
    return this.articles;
  }

  fetchSources() {
    return this.sources;
  }

  getUser() {
    return this.user;
  }

  implementActions(action) {
    switch (action.type) {
      case 'GET_ARTICLES': {
        this.articles = action.data;
        this.emit('articlesChanged');
        break;
      }
      case 'GET_SOURCES': {
        this.sources = action.data;
        this.emit('sourcesChanged');
        break;
      }
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

const newsStore = new NewsStore();
dispatcher.register(newsStore.implementActions.bind(newsStore));

export default newsStore;
