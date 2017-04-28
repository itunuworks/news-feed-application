import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import fetch from 'fetch';

const host = 'https://newsapi.org/v1/';
const apiKey = '213327409d384371851777e7c7f78dfe';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.fetchSources();
    this.fetchHeadlines(this.sources[0], 'latest');
  }

  fetchHeadlines(source, sortBy) {
    fetch.get(`${host}articles?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`)
      .then(res => res.json())
      .then((data) => {
        this.headlines = data.articles;
        this.emit('headlinesChanged');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchSources() {
    fetch.get(`${host}sources`)
      .then(res => res.json())
      .then((data) => {
        this.sources = data.articles;
        this.emit('sourcesChanged');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  implementActions(action) {
    switch(action.type) {
      case 'GET_HEADLINES': {
        this.fetchHeadlines(action.source, action.sortBy);
        break;
      }
      case 'GET_SOURCES': {
        this.fetchSources();
        break;
      }
    }
  }
}

const newsStore = new NewsStore;
dispatcher.register(newsStore.implementActions.bind(newsStore));

export default newsStore;
