// import * as actions from '../../src/js/actions/newsActions';
// import dispatcher from '../../src/js/dispatcher';



// describe('Test all action functions: ', () => {
//   it('should be defined', () => {
//     expect(actions).toBeDefined();
//   });
//   describe('How newsStore handles dispatched actions', () => {
//     describe('On dispatch message GET_ARTICLES', () => {
//       const action = {
//         type: 'GET_ARTICLES',
//         articles: ['one', 'two', 'three'],
//       };
//       dispatcher.dispatch(action);
//       it('Should set its articles to those in the dispatch', () => {
//         expect(newsStore.fetchArticles()).toHaveLength(action.articles.length);
//       });
//       it('Should set its articles to those in the dispatch', () => {
//         expect(newsStore.fetchArticles()).toEqual(action.articles);
//       });
//     });
// //     describe('On dispatch message GET_SOURCES', () => {
// //       const action = {
// //         type: 'GET_SOURCES',
// //         sources: ['four', 'five', 'six'],
// //       };
// //       dispatcher.dispatch(action);
// //       it('Should set its sources to those in the dispatch', () => {
// //         expect(newsStore.fetchSources()).toHaveLength(action.sources.length);
// //       });
// //       it('Should set its sources to those in the dispatch', () => {
// //         expect(newsStore.fetchSources()).toEqual(action.sources);
// //       });
// //     });
// //   });
// });

// // function implementActions(payload) {
// //   return payload;
// // }
// // dispatcher.register(implementActions);