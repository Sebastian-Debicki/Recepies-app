import * as actionTypes from '../actions/actionTypes';

const initialState = { navOpen: false, modalOpen: false }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NAV_TOGGLE:
      return {
        ...state,
        navOpen: !state.navOpen
      }
    case actionTypes.MODAL_OPEN:
      return {
        ...state,
        modalOpen: true
      }
    case actionTypes.MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false
      }
    default: return state
  }
}

export default reducer;