import dispatcher from '../dispatcher';
import api from '../api/newsAPI';

export function getArticles(source, sortBy) {
  api.getArticles(source, sortBy, (data) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data,
    });
  });
}

export function getSources() {
  api.getSources((data) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      data,
    });
  });
}
