import { createSelector } from 'reselect';

const postsSelector = state => state.posts;

export const sendersWithCount = createSelector(postsSelector, posts =>
  Object.entries(posts.byUser).map(([from_id, userData]) => ({
    from_id,
    from_name: userData.from_name,
    count: userData.posts.length,
  })),
);
