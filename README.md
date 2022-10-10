<div align="center">
  <br />
  <h1>turnstile.js </h1>
  <br />
  <p>
      <a href="https://dsc.gg/loick" target="_blank"><img src="https://lolinck.vercel.app/made-by.png" alt="loick"/></a>
    <a href="https://dsc.gg/loick" target="_blank"><img src="https://img.shields.io/discord/822911379924582410?color=5865F2&logo=discord&logoColor=white&style=for-the-badge" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/@teamloick/turnstile.js" target="_blank"><img src="https://img.shields.io/npm/v/@teamloick/turnstile.js.svg?style=for-the-badge" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@teamloick/turnstile.js" target="_blank"><img src="https://img.shields.io/npm/dw/@teamloick/turnstile.js?style=for-the-badge" alt="npm downloads" /></a>
  </p>
</div>

An easy integration for <a target="_blank" href="https://www.cloudflare.com/products/turnstile/?utm_source=loick">Cloudflare Turnstile Captchas.</a>

All credits of the integration for react for <a href="https://www.npmjs.com/package/react-turnstile" target="_blank">react-turnstile</a> made by Le0developer.

## Guide

- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
  - <a href="#validating-token">Validating token</a>
  - <a href="#react-component">React component</a>
- <a href="#documentation">Documentation</a>
  - <a href="#validating-token-1">Validating token</a>
  - <a href="#react-component-1">React component</a>

## Installation

```bash
npm i @teamloick/turnstile.js
# yarn add @teamloick/turnstile.js
# pnpm add @teamloick/turnstile.js
```

## Usage

### Validating token

#### CommonJs:

```javascript
const turnstile = require('@teamloick/turnstile.js');

(async () => {
  var secret = '1x0000000000000000000000000000000AA'; // your secret key
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
  var secret = '1x0000000000000000000000000000000AA'; // your secret key
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

### React Component

```jsx
import Turnstile from '@teamloick/turnstile.js/react';

// ...

function TurnstileWidget() {
  return (
    <Turnstile
      sitekey="1x00000000000000000000AA"
      onVerify={(token) => alert(token)}
    />
  );
}
```

## Documentation

### Validating token

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

### React Component

Turnstile takes the following arguments:

| name              | type    | description                                   |
| ----------------- | ------- | --------------------------------------------- |
| sitekey           | string  | sitekey of your website (REQUIRED)            |
| action            | string  | -                                             |
| cData             | string  | -                                             |
| theme             | string  | one of "light", "dark", "auto"                |
| tabIndex          | number  | -                                             |
| responseField     | boolean | controls generation of `<input />` element \* |
| responseFieldName | string  | changes the name of `<input />` element \*    |
| id                | string  | id of the div                                 |
| className         | string  | passed to the div                             |
| style             | object  | passed to the div                             |

And the following callbacks:

| name     | arguments | description                                |
| -------- | --------- | ------------------------------------------ |
| onVerify | token     | called when challenge is passed (REQUIRED) |
| onLoad   | -         | called when the widget is loaded           |
| onError  | error     | called when an error occurs                |
| onExpire | -         | called when the challenge expires \*\*     |

\* responseField and responseFieldName are experimental and not yet documented.

\*\* `onExpire` is called when the Turnstile challenge expires without creating a token.

For more details on what each argument does, see the [Cloudflare Documentation](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#configurations).

## To do

| Status    | Task                               |
| --------- | ---------------------------------- |
| Completed | Add full validation support        |
| Doing     | Add client side support with react |
