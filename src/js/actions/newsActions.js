import dispatcher from '../dispatcher';
import Api from '../api/newsAPI';

export function getArticles(source, sortBy) {
  Api.getArticles(source, sortBy, (data) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data,
    });
  });
}

export function getSources() {
  Api.getSources((data) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      data,
    });
  });
}
