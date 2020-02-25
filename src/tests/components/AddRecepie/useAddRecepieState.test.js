import { renderHook, act } from '@testing-library/react-hooks'
import { useAddRecepieState } from '../../../components/AddRecepie/useAddRecepieState';

describe('useAddRecepieState', () => {
  it('changeRecepieNameHandler - state has correct name value', () => {
    const { result } = renderHook(useAddRecepieState);
    act(() => {
      result.current.changeRecepieNameHandler({ target: { value: 'recepie-name' } })
    })
    expect(result.current.nameRecepieState).toEqual('recepie-name')
  })

  it('changeRecepieDescriptionHandler - state has correct description value', () => {
    const { result } = renderHook(useAddRecepieState);
    act(() => {
      result.current.changeRecepieDescriptionHandler({ target: { value: 'recepie-description' } })
    })
    expect(result.current.descriptionRecepieState).toEqual('recepie-description')
  })
})