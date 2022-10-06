<div align="center">
  <br />
  <h1>turnstile.js </h1>
  <br />
  <p>
      <a href="https://dsc.gg/loick"><img src="https://lolinck.vercel.app/made-by.png" alt="loick"/></a>
    <a href="https://dsc.gg/loick"><img src="https://img.shields.io/discord/822911379924582410?color=5865F2&logo=discord&logoColor=white&style=for-the-badge" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/@teamloick/turnstile.js"><img src="https://img.shields.io/npm/v/@teamloick/turnstile.js.svg?style=for-the-badge" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@teamloick/turnstile.js"><img src="https://img.shields.io/npm/dw/@teamloick/turnstile.js?style=for-the-badge" alt="npm downloads" /></a>
  </p>
</div>

An easy integration to validate turnstile captchas

## Installation

```bash
npm i @teamloick/turnstile.js
# yarn add @teamloick/turnstile.js
# pnpm add @teamloick/turnstile.js
```

## Usage

#### CommonJs:

```javascript
const turnstile = require('@teamloick/turnstile.js');

(async () => {
  var secret = ' your secret key';
  var token = 'the token that the captcha gives';
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

#### ESmodules:

```typescript
import turnstile from '@teamloick/turnstile.js';

(async () => {
  var secret = ' your secret key';
  var token = 'the token that the captcha gives';
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

## Documentation

The validation function takes the following parameters:
| Parameter | Required/Optional | description |
|-----------|-------------------|-------------------------------------------------------------------------------------|
| `secret` | Required | The site’s secret key. |
| `response` | Required | The response provided by the Turnstile client-side render on your site. (The token) |
| `remoteip` | Optional | The user’s IP address. |

The validation answer with the following parameters:

In case of a successful validation, the response should be similar to the following:

```json
{
  "success": true,
  "challenge_ts": "2022-02-28T15:14:30.096Z",
  "hostname": "example.com",
  "error-codes": [],
  "action": "login",
  "cdata": "sessionid-123456789"
}
```

| Parameter    | description                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| challenge_ts | is the ISO timestamp for the time the challenge was solved.                                                                                                                                                                                                                                  |
| hostname     | is the hostname for which the challenge was served.                                                                                                                                                                                                                                          |
| error-codes  | is a list of errors that occurred.                                                                                                                                                                                                                                                           |
| action       | is the customer widget identifier passed to the widget on the client side. This is used to differentiate widgets using the same sitekey in analytics. Its integrity is protected by modifications from an attacker. It is recommended to validate that the action matches an expected value. |
| cdata        | is the customer data passed to the widget on the client side. This can be used by the customer to convey state. It is integrity protected by modifications from an attacker.                                                                                                                 |

In case of a validation failure, the function will throw an error.
