import fetch from 'node-fetch';
const API_URL: string =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function validate(secret: string, token: string, ip?: string) {
  let formData = new URLSearchParams();
  formData.append('secret', secret);
  formData.append('response', token);
  if (ip) {
    formData.append('remoteip', ip);
  }

  var res = await fetch(API_URL, {
    body: formData,
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  var data: {
    success: boolean;
    'error-codes': Array<string>;
    challenge_ts?: string;
    hostname?: string;
    action?: string;
    cdata?: string;
  } = await res.json();
  var error = data['error-codes'][0];
  if (error) {
    switch (error) {
      case 'missing-input-secret':
        throw new Error('The secret parameter was not passed.');
      case 'invalid-input-secret':
        throw new Error('The secret parameter was invalid or did not exist.');
      case 'missing-input-response':
        throw new Error('The response(token) parameter was not passed.');
      case 'invalid-input-response':
        throw new Error(
          'The response(token) parameter is invalid or has expired.',
        );
      case 'bad-request':
        throw new Error('	The request was rejected because it was malformed.');
      case 'timeout-or-duplicate':
        throw new Error(
          'The response parameter has already been validated before.',
        );
      case 'internal-error':
        throw new Error(
          'An internal error happened while validating the response. The request can be retried.',
        );
    }
  }
  return data;
}

module.exports = validate;
