export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as SessionUtil from '../util/session_api_util';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const postUser = (user) => dispatch => {
  return SessionUtil.postUser(user)
    .then(res => dispatch(receiveCurrentUser(res)),
    error => dispatch(receiveErrors(error.responseJSON)));
};

export const postSession = (user) => dispatch => {
  return SessionUtil.postSession(user)
    .then(res => dispatch(receiveCurrentUser(res.currentUser)),
    error => dispatch(receiveErrors(error.responseJSON)));
};

export const deleteSession = () => dispatch => {
  return SessionUtil.deleteSession()
    .then(res => dispatch(receiveCurrentUser(null)));
};
