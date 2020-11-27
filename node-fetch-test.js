var nf = require('node-fetch');

var url = 'https://python-api.ming-taiwan.vercel.app/api/star'

nf(url).then(
  function(u){ return u.json();}
).then(
  function(json){
    console.log(json);
  }
)
