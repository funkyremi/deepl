# Deepl

[![npm version](https://img.shields.io/npm/v/deepl.svg)](https://www.npmjs.com/package/deepl)
[![Dependency Status](https://david-dm.org/funkyremi/deepl.svg)](https://david-dm.org/funkyremi/deepl)

Deepl API wrapper for node.

## Installation
```
npm install deepl --save
```

## Documentation

Official documentation can be found here: https://www.deepl.com/api.html

## API key

Get an account and an API key here: https://www.deepl.com/pro.html

## Supported languages

`"EN" "DE" "FR" "ES" "PT" "IT" "NL" "PL" "RU"`

## Usage

``` js
const translate = require("deepl");

translate({
    text: 'I am a text',
    target_lang: 'FR',
    auth_key: 'authkey',
    // All optional parameters available in the official documentation can be defined here as well.
  })
  .then(result => {
      console.log(result.data);
  })
  .catch(error => {
      console.error(error)
  });
```

## Example response

```json
{
    "translations": [
        {
            "detected_source_language": "EN",
            "text": "Je suis un texte"
        }
    ]
}
```

## License

MIT
