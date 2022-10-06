# turnstile.js

An easy integration to validate turnstile captchas

## Installation

```bash
npm i turnstile.js
# yarn add turnstile.js
# pnpm add turnstile.js
```

## Usage

#### CommonJs:

```javascript
const turnstile = require("turnstile.js");

(async () => {
  var secret = " your secret key";
  var token = "the token that the captcha gives";
  var res = await turnstile(secret, token);
  console.log(res); /* {
  success: true,
  'error-codes': [],
  challenge_ts: '2022-02-28T15:14:30.096Z',
  hostname: 'example.com',
  action: '',
  cdata: ''
}*/
})();
```
