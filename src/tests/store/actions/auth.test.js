import * as actions from '../../../store/actions/auth';
import * as actionTypes from '../../../store/actions/actionTypes';

describe('AUTH_START - actions', () => {
  it('has a correct type', () => {
    const action = actions.authStart();
    expect(action.type).toEqual(actionTypes.AUTH_START);
  })
})

describe('AUTH_FAIL - actions', () => {
  const action = actions.authFail('some-error');
  it('has a correct type', () => {
    expect(action.type).toEqual(actionTypes.AUTH_FAIL);
  })

  it('has a correct error value', () => {
    expect(action.error).toEqual('some-error');
  })
})

describe('AUTH_SUCCESS - actions', () => {
  const action = actions.authSuccess('some-token', 'some-user-id');
  it('has a correct type', () => {
    expect(action.type).toEqual(actionTypes.AUTH_SUCCESS);
  })

  it('has a correct idToken value', () => {
    expect(action.token).toEqual('some-token');
  })

  it('has a correct userId value', () => {
    expect(action.userId).toEqual('some-user-id');
  })
})

describe('AUTH_LOGOUT - actions', () => {
  it('has a correct type', () => {
    const action = actions.logout();
    expect(action.type).toEqual(actionTypes.AUTH_LOGOUT);
  })
})