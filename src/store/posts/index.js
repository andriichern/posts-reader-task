import createActions from '../actionCreator';
import { getPosts } from 'api/postsApi';

// constants
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const DEFAULT_STATE = [];

// actions
export const fetchPostsSuccess = payload => ({ type: FETCH_POSTS_SUCCESS, payload });

export const fetchPostsError = () => ({ type: FETCH_POSTS_ERROR });

//thunks
export const fetchPosts = (page = 1) => (dispatch, getState) => {
  const sl_token = getState().auth.sl_token;

  return getPosts({ page, sl_token })
    .then(response => dispatch(fetchPostsSuccess(response)))
    .catch(error => {
      dispatch(fetchPostsError());
      throw error;
    });
};

// reducer
const postsActions = {
  [FETCH_POSTS_SUCCESS]: (_, payload) => payload,
};

export const postsReducer = createActions(postsActions)(DEFAULT_STATE);
