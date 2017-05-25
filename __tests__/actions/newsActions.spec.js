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

// newsApiGetSources.mockReturnValue('We are Sources');
// newsApiGetArticles.mockReturnValue('We are articles');

// Call the authStateChangedHandler function with some data.
actions.authStateChangedHandler({ name: 'Itunuloluwa' });

// Test implementations.
describe('Action dispatches messages as Required', () => {
  it('should have Itunuloluwa as name in the message', () => {
    expect(dispatch.calls[0][0].user.name).toBe('Itunuloluwa');
  });

  it('should have been called only once', () => {
    expect(dispatch.calls.length).toBe(1);
  });

  it('should have AUTH_CHANGED as the message type', () => {
    expect(dispatch.calls[0][0].type).toBe('AUTH_CHANGED');
  });

  it('should trigger a function on signIn', () => {
    expect(actions.signIn).toBeInstanceOf(Function);
  });

  it('should trigger a function on signOut', () => {
    expect(actions.signOut).toBeInstanceOf(Function);
  });

  it('should call firebaseSignIn on signIn', () => {
    actions.signIn();
    expect(firebaseSignIn.calls.length).toBe(1);
  });

  it('should call firebaseSignOut on signOut', () => {
    actions.signOut();
    expect(firebaseSignOut.calls.length).toBe(1);
  });

  it('should call newsApi.getSources() on getSources', () => {
    actions.getSources();
    expect(newsApiGetSources.mock.calls.length).toBe(1);
  });

  it('should dispatch a message on user authentication', () => {
    actions.getArticles();
    expect(newsApiGetArticles.mock.calls.length).toBe(1);
  });
});
