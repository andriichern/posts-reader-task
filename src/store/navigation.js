import { fetchPosts } from './posts';
import { sitePaths } from 'src/routeMap';

export default {
  [sitePaths.posts]: () => fetchPosts(),
};
