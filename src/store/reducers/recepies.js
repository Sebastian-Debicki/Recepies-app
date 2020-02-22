import * as actionTypes from '../actions/actionTypes';

const initialState = {
  recepiesList: [],
  loading: false,
  error: null
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_RECEPIE_SUCCESS:
      const newRecepie = updateObject(action.recepie, { id: action.id, })
      return {
        ...state,
        recepiesList: state.recepiesList.concat(newRecepie)
      }
    case actionTypes.SAVE_RECEPIE_FAIL:
      return {
        ...state,
        error: action.error
      }
    case actionTypes.REMOVE_RECEPIE_SUCCESS:
      const index = state.recepiesList.findIndex(recepie => recepie.id === action.id)
      const recepiesList = [...state.recepiesList];
      recepiesList.splice(index, 1)
      return {
        ...state,
        recepiesList: recepiesList
      }
    case actionTypes.FETCH_RECEPIES_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_RECEPIES_SUCCESS:
      return {
        ...state,
        recepiesList: action.fetchedData,
        loading: false
      }
    case actionTypes.FETCH_RECEPIES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default: return state
  }
}

export default reducer;