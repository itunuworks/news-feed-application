import rp from 'request-promise';

const host = 'https://newsapi.org/v1/';
const apiKey = '213327409d384371851777e7c7f78dfe';

class Api{
  getArticles(source, sortBy, callback) {
    const opts = {
      uri: `${host}articles`,
      qs: {
          apiKey,
          source,
          sortBy
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true 
    }
    rp(opts)  
      .then((data) => {
        console.log(data.articles);
        return callback(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSources(callback) {
    const opts = {
      uri: `${host}sources`,
      qs: {
          apiKey,
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true 
    }
    rp(opts)
      .then((data) => {
        console.log(data.articles);
        return callback(data.sources);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default new Api;