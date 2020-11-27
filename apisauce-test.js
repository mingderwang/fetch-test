const apisauce = require('apisauce')

// define the api
const api = apisauce.create({
  baseURL: 'https://python-api.ming-taiwan.vercel.app',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

// start making calls
api
  .get('/api/star')
  .then(response => response.data)
  .then(console.log)
