const validate = require('../dist/index.js');

(async () => {
  var secret = ' your secret key';
  var token = 'the token that the captcha gives';
  var res = await validate(secret, token);
  console.log(res); /* {
    success: true,
    'error-codes': [],
    challenge_ts: '2022-02-28T15:14:30.096Z',
    hostname: 'example.com',
    action: '',
    cdata: ''
  }*/
})();
