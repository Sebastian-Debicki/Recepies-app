import { renderHook, act } from '@testing-library/react-hooks'
import { useAuthState } from '../../../containers/Auth/useAuthState'

describe('useAuthState', () => {
  it('changeInputValuesHandler - state has correct email value', () => {
    const { result } = renderHook(useAuthState);
    act(() => {
      result.current.changeInputValuesHandler({ target: { value: 'some-email' } }, 'email')
    })
    expect(result.current.controlsState.controls.email.value).toEqual('some-email')
  })

  it('changeInputValuesHandler - state has correct password value', () => {
    const { result } = renderHook(useAuthState);
    act(() => {
      result.current.changeInputValuesHandler({ target: { value: 'some-password' } }, 'password')
    })
    expect(result.current.controlsState.controls.password.value).toEqual('some-password')
  })

  it('switchAuthTypeHandler - has state value true when function was called once', () => {
    const { result } = renderHook(useAuthState);
    act(() => {
      result.current.switchAuthTypeHandler()
    })
    expect(result.current.switchAuthTypeState).toBe(true)
  })

  it('switchAuthTypeHandler - has state value false when function was called second time', () => {
    const { result } = renderHook(useAuthState);
    act(() => {
      result.current.switchAuthTypeHandler()
    })
    act(() => {
      result.current.switchAuthTypeHandler()
    })
    expect(result.current.switchAuthTypeState).toBe(false)
  })
})