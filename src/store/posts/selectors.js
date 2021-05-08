import { createSelector } from 'reselect';

const postsByUser = state => state.posts.byUser;

export const sendersWithCount = createSelector(postsByUser, posts =>
  Object.entries(posts).map(([from_id, userData]) => ({
    from_id,
    from_name: userData.from_name,
    count: userData.posts.length,
  })),
);

export const senderPosts = from_id => createSelector(postsByUser, posts => posts[from_id].posts);
