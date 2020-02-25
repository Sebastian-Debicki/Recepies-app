import * as actionTypes from '../../../store/actions/actionTypes';
import recepiesReducer from '../../../store/reducers/recepies';
import { recepiesList } from '../../dummyData/recepies';

const initialState = {
  recepiesList: [],
  loading: false,
  error: null
}

const recepie = {
  name: 'new-recepie',
  description: 'some-description'
}
const id = '111222';

describe('recepies reducer', () => {
  it('should return initial state', () => {
    expect(recepiesReducer(undefined, {})).toEqual(initialState)
  })

  it('SAVE_RECEPIE_SUCCESS - return correct state values after action', () => {
    expect(recepiesReducer({ recepiesList, loading: false, error: null }, {
      type: actionTypes.SAVE_RECEPIE_SUCCESS,
      recepie,
      id
    })).toEqual({
      recepiesList: [...recepiesList, { ...recepie, id }],
      loading: false,
      error: null
    })
  })

  it('SAVE_RECEPIE_FAIL - return correct state values after action', () => {
    expect(recepiesReducer({ recepiesList: [], loading: false, error: null }, {
      type: actionTypes.SAVE_RECEPIE_FAIL,
      error: 'some-error'
    })).toEqual({
      recepiesList: [],
      loading: false,
      error: 'some-error'
    })
  })


  it('REMOVE_RECEPIE_SUCCESS - return correct state values after action', () => {
    expect(recepiesReducer({ recepiesList, loading: false, error: null }, {
      type: actionTypes.REMOVE_RECEPIE_SUCCESS,
      id: "-M0bgSJE7ydEE7YAH_-0"
    })).toEqual({
      recepiesList: [recepiesList[1], recepiesList[2]],
      loading: false,
      error: null
    })
  })


  it('FETCH_RECEPIES_START - return correct state values after action', () => {
    expect(recepiesReducer({ recepiesList, loading: false, error: null }, {
      type: actionTypes.FETCH_RECEPIES_START,
      loading: true
    })).toEqual({
      recepiesList,
      loading: true,
      error: null
    })
  })

  it('FETCH_RECEPIES_SUCCESS - return correct state values after action', () => {
    expect(recepiesReducer({ recepiesList: [], loading: true, error: null }, {
      type: actionTypes.FETCH_RECEPIES_SUCCESS,
      fetchedData: recepiesList,
      loading: false
    })).toEqual({
      recepiesList,
      loading: false,
      error: null
    })
  })

  it('FETCH_RECEPIES_FAIL - return correct state values after action', () => {
    expect(recepiesReducer({ recepiesList: [], loading: true, error: null }, {
      type: actionTypes.FETCH_RECEPIES_FAIL,
      error: 'some-error',
      loading: false
    })).toEqual({
      recepiesList: [],
      loading: false,
      error: 'some-error'
    })
  })
})