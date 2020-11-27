const axios = require('axios')
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

var instance = axios.create({
  baseURL: proxyUrl + 'https://python-api.ming-taiwan.vercel.app'
});

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
 
// Override timeout default for the library
// Now all requests will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;
 
// Override timeout for this request as it's known to take a long time
instance.get('/api/star', {
  timeout: 5000
}).then(console.log)
