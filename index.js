const axios = require('axios');
const querystring = require('querystring');

function translate(parameters) {
	return axios.post(`https://api.deepl.com/v2/translate`, querystring.stringify(parameters));
}

module.exports = translate;
