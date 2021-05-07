import { fetch } from './client';

const postsUrl = process.env.API_URL + '/posts/';

export const getPosts = ({ page, sl_token }) => fetch({ url: postsUrl, query: { sl_token, page } });
