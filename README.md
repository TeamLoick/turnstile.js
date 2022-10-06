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
