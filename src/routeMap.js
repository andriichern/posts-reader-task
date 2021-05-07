import { lazy } from 'react';

export const sitePaths = {
  login: '/login/',
  posts: '/posts/',
};

export const routesMap = [
  {
    exact: false,
    path: sitePaths.posts,
    page: lazy(() => import('./pages/PostsPage')),
  },
];
