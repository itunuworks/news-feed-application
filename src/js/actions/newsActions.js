import dispatcher from '../dispatcher';
// import fetch from 'fetch';
// import rp from 'request-promise';
import api from '../api/newsAPI';

// const host = 'https://newsapi.org/v1/';
// const apiKey = '213327409d384371851777e7c7f78dfe';

// console.log(fetch);
// export function getHeadlines(source, sortBy) {
// 	// fetch.get(`${host}articles?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`)
//   const opts = {
//     uri: `${host}articles`,
//     qs: {
//         apiKey: 'xxxxx xxxxx',
//         source,
//         sortBy
//     },
//     headers: {
//         'User-Agent': 'Request-Promise'
//     },
//     json: true 
//   }
//   rp(opts)  
//     .then((data) => {
//       dispatcher.dispatch({
//         type: 'GET_HEADLINES',
//         data
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// export function getSources() {
//   // fetch.get(`${host}sources`)
//   rp()
//     .then(res => res.json())
//     .then((data) => {
//       dispatcher.dispatch({
//         type: 'GET_SOURCES',
//         data
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

export function getHeadlines(source, sortBy){
  api.getHeadlines(source, sortBy, (data) => {
    dispatcher.dispatch({
      type: 'GET_HEADLINES',
      data
    });
  });
}

export function getSources(){
  console.log('I am firing');
  api.getSources((data) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      data
    });
  });
}