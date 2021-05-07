import fetch from './client';

const authUrl = process.env.API_URL + '/register';

export const signIn = ({ name, email, client_id = process.env.CLIENT_ID }) =>
  fetch({ url: authUrl, body: { name, email, client_id } });
