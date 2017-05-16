import dispatcher from '../../src/js/dispatcher';
import newsStore from '../../src/js/store/newsStore';

describe('Test all stores: ', () => {
  it('should be defined', () => {
    expect(newsStore).toBeDefined();
  });
  describe('How newsStore handles dispatched actions', () => {
    describe('On dispatch message GET_ARTICLES', () => {
      const action = {
        type: 'GET_ARTICLES',
        articles: ['one', 'two', 'three'],
      };
      dispatcher.dispatch(action);
      it('Should set its articles to those in the dispatch', () => {
        expect(newsStore.fetchArticles()).toHaveLength(action.articles.length);
      });
      it('Should set its articles to those in the dispatch', () => {
        expect(newsStore.fetchArticles()).toEqual(action.articles);
      });
    });
    describe('On dispatch message GET_SOURCES', () => {
      const action = {
        type: 'GET_SOURCES',
        sources: ['four', 'five', 'six'],
      };
      dispatcher.dispatch(action);
      it('Should set its sources to those in the dispatch', () => {
        expect(newsStore.fetchSources()).toHaveLength(action.sources.length);
      });
      it('Should set its sources to those in the dispatch', () => {
        expect(newsStore.fetchSources()).toEqual(action.sources);
      });
    });
    describe('On dispatch message AUTH_CHANGED', () => {
      const action = {
        type: 'AUTH_CHANGED',
        user: { name: 'Itunuloluwa' },
      };
      dispatcher.dispatch(action);
      it('Should set its user to that in the dispatch', () => {
        expect(newsStore.getUser()).not.toBeNull();
      });
      it('Should set its user to that in the dispatch', () => {
        expect(newsStore.getUser()).toBe(action.user);
      });
    });
    describe('On invalid dispatch message e.g AUTHED', () => {
      const action = {
        type: 'AUTHED',
        user: { name: 'Itunuloluwa' },
      };
      // Get initial state of the store
      const initialStoreUserState = newsStore.user;
      dispatcher.dispatch(action);
      it('Should not tamper with the store state', () => {
        expect(newsStore.getUser()).toEqual(initialStoreUserState);
      });
    });
  });
});
