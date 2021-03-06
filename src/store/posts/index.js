import createActions from 'store/actionCreator';
import { getPosts } from 'api/postsApi';
import { sitePaths } from 'src/routesMap';

// constants
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const DEFAULT_STATE = {
  raw: [],
  byUser: {},
};

// actions
export const fetchPostsSuccess = payload => ({ type: FETCH_POSTS_SUCCESS, payload });

export const fetchPostsError = () => ({ type: FETCH_POSTS_ERROR });

//thunks
export const fetchPosts = (history, page = 1) => (dispatch, getState) => {
  const sl_token = getState()._auth.sl_token;

  return getPosts({ page, sl_token })
    .then(response => dispatch(fetchPostsSuccess(response.data)))
    .catch(error => {
      dispatch(fetchPostsError());
      history?.push(sitePaths.login);
    });
};

// reducer
const groupByUser = posts => {
  let currentPost;
  const groupedResult = {};

  for (let i = 0; i < posts.length; ++i) {
    currentPost = posts[i];
    currentPost.created_time = new Date(currentPost.created_time);

    if (groupedResult[currentPost.from_id]) {
      groupedResult[currentPost.from_id].posts.push(currentPost);
    } else {
      groupedResult[currentPost.from_id] = {
        from_id: currentPost.from_id,
        from_name: currentPost.from_name,
        posts: [currentPost],
      };
    }
  }

  return groupedResult;
};

const postsActions = {
  [FETCH_POSTS_SUCCESS]: (_, payload) => ({
    raw: payload.posts,
    byUser: groupByUser(payload.posts),
  }),
};

export const postsReducer = createActions(postsActions)(DEFAULT_STATE);
