import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.sources = [];
  }

  fetchArticles() {
    return this.headlines;
  }

  fetchSources() {
    return this.sources; 
  }

  implementActions(action) {
    switch(action.type) {
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
    }
  }
}

const newsStore = new NewsStore;
dispatcher.register(newsStore.implementActions.bind(newsStore));

export default newsStore;
