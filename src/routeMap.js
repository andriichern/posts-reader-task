import { lazy } from 'react';

const sitePaths = {
  home: `/`,
};

export const routesMap = [
  {
    exact: true,
    path: sitePaths.home,
    page: lazy(() => import('./pages/PostsPage')),
  },
];
