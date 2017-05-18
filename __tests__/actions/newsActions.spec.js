import dispatcher from '../../src/js/dispatcher';
import * as actions from '../../src/js/actions/newsActions';
import firebaseApi from '../../src/js/api/firebaseApi';
import NewsApi from '../../src/js/api/newsAPI';

// Mock the dispatcher, firebaseApi and newsApi.
jest.mock('../../src/js/dispatcher');
jest.mock('../../src/js/api/firebaseApi');
jest.mock('../../src/js/api/newsAPI');

// Setup the actual mock functions for the relevant functions.
const dispatch = dispatcher.dispatch.mock;
const firebaseSignIn = firebaseApi.signIn.mock;
const firebaseSignOut = firebaseApi.signOut.mock;
// Setup constants to help manage future newsApi mock functions.
const newsApiGetSources = NewsApi.getSources;
const newsApiGetArticles = NewsApi.getArticles;

newsApiGetSources.mockReturnValue('We are Sources');
newsApiGetArticles.mockReturnValue('We are articles');

// Call the authStateChangedHandler function with some data.
actions.authStateChangedHandler({ name: 'Itunuloluwa' });

// Test implementations.
describe('Action dispatches a message', () => {
  it('dispatcher calls lenght should be > 0', () => {
    expect(dispatch.calls[0][0].user.name).toBe('Itunuloluwa');
  });
  it('should dispatch a message on user authentication', () => {
    expect(dispatch.calls.length).toBe(1);
  });
  it('should dispatch a message on user authentication', () => {
    expect(dispatch.calls[0][0].type).toBe('AUTH_CHANGED');
  });
  it('should dispatch a message on user authentication', () => {
    expect(actions.signIn).toBeInstanceOf(Function);
  });
  it('should dispatch a message on user authentication', () => {
    expect(actions.signOut).toBeInstanceOf(Function);
  });
  it('should dispatch a message on user authentication', () => {
    actions.signIn();
    expect(firebaseSignIn.calls.length).toBe(1);
  });
  it('should dispatch a message on user authentication', () => {
    actions.signOut();
    expect(firebaseSignOut.calls.length).toBe(1);
  });
  it('should call newsApi.getSources()', () => {
    actions.getSources();
    expect(newsApiGetSources.mock.calls.length).toBe(1);
  });
  it('should dispatch a message on user authentication', () => {
    actions.getArticles();
    expect(newsApiGetArticles.mock.calls.length).toBe(1);
  });
});
