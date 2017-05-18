import dispatcher from '../../src/js/dispatcher';
import newsStore from '../../src/js/store/newsStore';

jest.mock('../../src/js/dispatcher');
const callback = dispatcher.register.mock.calls[0][0];

// beforeEach(() => {
//   console.log(dispatcher.dispatch.mock.calls.length);
//   // callback = dispatcher.register.mock.calls[0][0];
// });

describe('Test all stores: ', () => {
  const actionGetArticles = {
    type: 'GET_ARTICLES',
    articles: ['one', 'two', 'three'],
  };
  const actionGetSources = {
    type: 'GET_SOURCES',
    sources: ['four', 'five', 'six'],
  };
  const actionAuthChanged = {
    type: 'AUTH_CHANGED',
    user: { name: 'Itunuloluwa' },
  };
  const actionInvalid = {
    type: 'AUTHED',
    user: { name: 'Invalid action' },
  };
  // describe('How newsStore handles dispatched actions', () => {
  //   describe('Its initial state should be default', () => {
  //     it('Should have an empty array as sources.', () => {
  //       expect(newsStore.fetchSources()).toEqual([]);
  //     });
  //     it('Should have an empty array as articles.', () => {
  //       expect(newsStore.fetchArticles()).toEqual([]);
  //     });
  //     it('Should have its user as null', () => {
  //       expect(newsStore.getUser()).toBeNull();
  //     });
  //   });
  // });
  describe('On dispatch message GET_ARTICLES', () => {
    it('Should set its articles to those in the dispatch', () => {
      callback(actionGetArticles);
      expect(newsStore.fetchArticles())
        .toHaveLength(actionGetArticles.articles.length);
    });
    it('Should set its articles to those in the dispatch', () => {
      expect(newsStore.fetchArticles()).toEqual(actionGetArticles.articles);
    });
  });
  describe('On dispatch message GET_SOURCES', () => {
    callback(actionGetSources);
    it('Should set its sources to those in the dispatch', () => {
      expect(newsStore.fetchSources())
      .toHaveLength(actionGetSources.sources.length);
    });
    it('Should set its sources to those in the dispatch', () => {
      expect(newsStore.fetchSources()).toEqual(actionGetSources.sources);
    });
  });
  describe('On dispatch message AUTH_CHANGED', () => {
    callback(actionAuthChanged);
    it('Should set its user to that in the dispatch', () => {
      expect(newsStore.getUser()).not.toBeNull();
    });
    it('Should set its user to that in the dispatch', () => {
      expect(newsStore.getUser()).toBe(actionAuthChanged.user);
    });
  });
  describe('On invalid dispatch message e.g AUTHED', () => {
    // Get initial state of the store
    const initialStoreUserState = newsStore.user;
    callback(actionInvalid);
    it('Should not tamper with the store state', () => {
      expect(newsStore.getUser()).toEqual(initialStoreUserState);
    });
  });
});
