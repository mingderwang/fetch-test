const got = require('got');

(async () => {
    try {
        const response = await got('https://python-api.ming-taiwan.vercel.app/api/star');
        console.log(response.body);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();
