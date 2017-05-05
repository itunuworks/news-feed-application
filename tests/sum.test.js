// import 'jasmine-matchers';
// import Articles from '../src/js/components/Articles';

// describe('Test all available Components, ', () => {
//   describe('all articles,', () => {
//     const myArticles = new Articles();

//     it('should be an Object', () => {
//       expect(myArticles).toBeObject();
//     });
//   });
// });

// const sum = require('./sum');
import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
