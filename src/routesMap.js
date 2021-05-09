import { lazy } from 'react';

export const sitePaths = {
  root: '/',
  login: '/login/',
  posts: '/posts/',
};

export const routesMap = [
  {
    exact: false,
    path: `${sitePaths.posts}:from_id?/`,
    page: lazy(() => import('./pages/PostsPage')),
  },
];
