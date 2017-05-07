import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.sources = [];
    this.user = '';
  }

  fetchArticles() {
    return this.articles;
  }

  fetchSources() {
    return this.sources;
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
      case 'USER_SIGNED_IN': {
        this.user = action.user;
        this.emit('userSignedIn');
        console.log('Emitting userSignedIn');
        break;
      }
      case 'USER_SIGNED_OUT': {
        this.user = '';
        this.emit('userSignedOut');
        console.log('Emitting userSignedOut');
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
