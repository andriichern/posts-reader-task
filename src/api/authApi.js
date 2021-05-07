import { fetch } from './client';

const authUrl = process.env.API_URL + '/register/';

export const login = ({ name, email }) => fetch({ url: authUrl, body: { name, email } });
