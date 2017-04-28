import Dispatcher from '../dispatcher';

export function getHeadlines(source, sortBy) {
	dispatcher.dispatch({
		type: 'GET_HEADLINES',
		source,
		sortBy
	});
}

export function getSources() {
	dispatcher.dispatch({
		type: 'GET_SOURCES'
	});
}