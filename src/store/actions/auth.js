import * as actionTypes from './actionTypes';
import firebase from 'firebase';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const auth = (email, password, signInsignUpSwitcher) => {
  return dispatch => {
    dispatch(authStart())
    let signInOrSignUp;
    if (signInsignUpSwitcher) signInOrSignUp = firebase.auth().createUserWithEmailAndPassword(email, password)
    else signInOrSignUp = firebase.auth().signInWithEmailAndPassword(email, password)

    signInOrSignUp
      .then((res) => {
        localStorage.setItem('token', res.user.ma)
        localStorage.setItem('userId', res.user.uid)
        dispatch(authSuccess(res.user.ma, res.user.uid))
      })
      .catch(function (error) {
        dispatch(authFail(error))
      });
  }
}

export const onTryAutoSignIn = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logout())
    } else {
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId))
    }
  }
}