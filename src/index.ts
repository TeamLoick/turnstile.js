import FormData from 'form-data';
import fetch from 'node-fetch';
const API_URL: string =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function validate(secret: string, token: string) {
  let formData = new FormData();
  formData.append('secret', secret);
  formData.append('response', token);
  var res = await fetch(API_URL, {
    body: formData,
    method: 'POST',
  });
  var data = await res.json();
  return data;
}

module.exports = validate;
