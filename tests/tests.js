// import * from 'jasmine-matchers';

// // Import all components
// import Articles from '../src/js/components/Articles';
// import DropdownItem from '../src/js/components/DropdownItem';
// import Sources from '../src/js/components/Sources';
// import NewsItem from '../src/js/components/NewsItem';

require('jasmine-matchers');

// Import all components
const Articles = require('../src/js/components/Articles');
// import DropdownItem from '../src/js/components/DropdownItem';
// import Sources from '../src/js/components/Sources';
// import NewsItem from '../src/js/components/NewsItem';

describe('Test all available Components, ', () => {
  describe('all articles,', () => {
    const myArticles = new Articles();

    it('should be an Object', () => {
      expect(myArticles).toBeObject();
    })
    // it('should be a subclass of React.Component' () => {
    //   e
    // })
  })
})