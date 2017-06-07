import httpRequest from 'request-promise';

const host = 'https://newsapi.org/v1/';
const apiKey = process.env.NEWSAPI_KEY;// use ENV to store keys.

/**
 * This class represents the state, properties and events of NewsApi
 *
 * @class NewsApi
 */
class NewsApi {
  /**
   * This function gets the top news articles from source
   * and passes the result to callback.
   *
   * @function getArticles
   * @static
   * @param {string} sourceId - The String id of the news source.
   * @param {string} sortBy - The String id of the sort method needed.
   * @param {function} callback - Function to be passed fetched data.
   * @returns {void}
   * @memberof NewsApi
   */
  static getArticles(sourceId, sortBy, callback) {
    const params = {
      uri: `${host}articles`,
      qs: {
        apiKey,
        source: sourceId,
        sortBy,
      },
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true,
    };
    httpRequest(params)
      .then(payload => callback(payload.articles));
  }

  /**
   * This function gets all the available sources in the NewsAPI
   * and passes them to callback
   *
   * @static
   * @param {function} callback - Function to be passed fetched data.
   * @function getSources
   * @returns {void}
   * @memberof NewsApi
   */
  static getSources(callback) {
    const params = {
      uri: `${host}sources`,
      qs: {
        apiKey,
      },
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true,
    };
    httpRequest(params)
      .then(payload => callback(payload.sources));
  }
}

export default NewsApi;
