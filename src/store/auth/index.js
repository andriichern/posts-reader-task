import createActions from 'store/actionCreator';
import { signIn } from 'api/authApi';

// constants
const SIGNIN_ERROR = 'SIGNIN_ERROR';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const DEFAULT_STATE = {};

// actions
export const signInSuccess = payload => ({ type: SIGNIN_SUCCESS, payload });

export const signInError = payload => ({ type: SIGNIN_ERROR, payload });

//thunks
export const signInUser = ({ name, email }, cb) => dispatch =>
  signIn({ name, email })
    .then(response => dispatch(signInSuccess(response.data)))
    .then(() => cb?.())
    .catch(error => {
      dispatch(signInError(error));
      throw error;
    });

// reducer
const authActions = {
  [SIGNIN_SUCCESS]: (_, payload) => payload,
  [SIGNIN_ERROR]: (_, payload) => payload,
};

export const authReducer = createActions(authActions)(DEFAULT_STATE);
