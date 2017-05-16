// Setup mock tests to test our test setup.
import * as actions from '../src/js/actions/newsActions';

describe('Test all available Components, ', () => {
  describe('all actions, ', () => {
    it('Should not be null', () => {
      expect(actions.getSources()).not.toBe(null);
    });
  });
});
describe('Sample tests', () => {
  describe('A more detailed description', () => {
    it('should do something really nice', () => {

    });
  });
});
