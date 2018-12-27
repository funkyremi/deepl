const axios = require('axios');

function translate(parameters) {
	return axios.post('https://api.deepl.com/v2/translate', parameters);
}

module.exports = translate;
