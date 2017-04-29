import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.headlines = [
      {
        "author":"Connie Loizos",
        "title":"Investor Chris Sacca is retiring from venture capital",
        "description":"Chris Sacca, a former Google lawyer who rose to fame by betting heavily on Twitter and Uber, says he's \"hanging up his spurs,\" and getting out of the..",
        "url":"https://techcrunch.com/2017/04/26/investor-chris-sacca-is-retiring-from-venture-capital/",
        "urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/12/chris-sacca.jpg?w=764&h=400&crop=1",
        "publishedAt":"2017-04-26T15:06:23Z"
      }
    ];
    this.sources = [
      {
        "id":"abc-news-au",
        "name":"ABC News (AU)",
        "description":"Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        "url":"http://www.abc.net.au/news",
        "category":"general",
        "language":"en",
        "country":"au",
        "urlsToLogos":
          {"small":"","medium":"","large":""},
        "sortBysAvailable":["top"]
      }
    ];
  }

  fetchHeadlines() {
    return this.headlines;
  }

  fetchSources() {
    return this.sources; 
  }

  implementActions(action) {
    switch(action.type) {
      case 'GET_HEADLINES': {
        this.headlines = action.data;
        this.emit('headlinesChanged');
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
