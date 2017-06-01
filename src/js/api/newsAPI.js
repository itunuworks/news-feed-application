import rp from 'request-promise';

const host = 'https://newsapi.org/v1/';
const apiKey = '213327409d384371851777e7c7f78dfe';// use ENV to store keys.

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
   * @static
   * @param {string} source - The String id of the news source.
   * @param {string} sortBy - The String id of the sort method needed.
   * @param {function} callback - Function to be passed fetched data.
   * @returns {void}
   * @function getArticles
   * @memberof NewsApi
   */
  static getArticles(source, sortBy, callback) {
    const opts = {
      uri: `${host}articles`,
      qs: {
        apiKey,
        source,
        sortBy,
      },
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true,
    };
    rp(opts)
      .then(data => callback(data.articles));
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
    const opts = {
      uri: `${host}sources`,
      qs: {
        apiKey,
      },
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true,
    };
    rp(opts)
      .then(data => callback(data.sources));
  }
}

export default NewsApi;
