import * as actionTypes from '../actions/actionTypes';

const initialState = { open: false }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NAV_TOGGLE:
      return {
        ...state,
        open: !state.open
      }
    default: return state
  }
}

export default reducer;