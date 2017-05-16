// import Articles from '../src/js/components/Articles';
import * as actions from '../src/js/actions/newsActions';

describe('Test all available Components, ', () => {
  // describe('all articles,', () => {
  //   const myArticles = new Articles();

  //   it('should be an Object', () => {
  //     expect.objectContaining(state);
  //   });
  // });
  describe('all actions, ', () => {
    it('Should not be null', () => {
      expect(actions.getSources()).not.toBe(null);
    });
  });
});

// const sum = require('./sum');
// import sum from './sum';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
describe('Sample tests', () => {
  describe('A more detailed description', () => {
    it('should do something really nice', () => {

    });
  });
});
