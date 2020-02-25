import * as actionTypes from '../../../store/actions/actionTypes';
import authReducer from '../../../store/reducers/auth';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState)
  })

  it('AUTH_START - return correct values', () => {
    expect(authReducer(initialState, {
      type: actionTypes.AUTH_START,
      loading: true
    })).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: true
    })
  })

  it('AUTH_SUCCESS - return correct values', () => {
    expect(authReducer(initialState, {
      type: actionTypes.AUTH_SUCCESS,
      token: 'some-token',
      userId: 'some-user-id'
    })).toEqual({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
    })
  })

  it('AUTH_FAIL - return correct values', () => {
    expect(authReducer({
      token: null,
      userId: null,
      error: null,
      loading: true
    }, {
      type: actionTypes.AUTH_FAIL,
      error: 'some-error',
      loading: false
    })).toEqual({
      token: null,
      userId: null,
      error: 'some-error',
      loading: false
    })
  })

  it('AUTH_LOGOUT - return correct values', () => {
    expect(authReducer({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false
    }, {
      type: actionTypes.AUTH_LOGOUT,
      token: null,
      userId: null
    })).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false
    })
  })
})