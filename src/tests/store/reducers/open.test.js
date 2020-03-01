import * as actionTypes from '../../../store/actions/actionTypes';
import openReducer from '../../../store/reducers/open';

describe('open reducer', () => {
  it('should return a initial state', () => {
    expect(openReducer(undefined, {})).toEqual({ navOpen: false, modalOpen: false })
  })

  it('NAV_TOGGLE - return correct state values', () => {
    expect(openReducer({ navOpen: false, modalOpen: false }, {
      type: actionTypes.NAV_TOGGLE,
      navOpen: true
    })).toEqual({ navOpen: true, modalOpen: false })
  })


  it('NAV_TOGGLE - return correct state values', () => {
    expect(openReducer({ navOpen: true, modalOpen: false }, {
      type: actionTypes.NAV_TOGGLE,
      navOpen: false
    })).toEqual({ navOpen: false, modalOpen: false })
  })

  it('MODAL_OPEN - return correct state values', () => {
    expect(openReducer({ navOpen: false, modalOpen: false }, {
      type: actionTypes.MODAL_OPEN,
      modalOpen: true
    })).toEqual({ navOpen: false, modalOpen: true })
  })

  it('MODAL_CLOSE - return correct state values', () => {
    expect(openReducer({ navOpen: false, modalOpen: true }, {
      type: actionTypes.MODAL_CLOSE,
      modalOpen: false
    })).toEqual({ navOpen: false, modalOpen: false })
  })
})