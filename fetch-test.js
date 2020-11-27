var fetchUrl = require("fetch").fetchUrl;

// refer to https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Requested-With
options = {
    headers:{
        "X-Requested-With": "XMLHttpRequest"
    }
}

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("https://python-api.ming-taiwan.vercel.app/api/star", options, function(error, meta, body){
    console.log(body.toString());
});
