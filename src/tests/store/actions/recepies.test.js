import * as actions from '../../../store/actions/recepies';
import * as actionTypes from '../../../store/actions/actionTypes';

describe('store recepies actions', () => {
  describe('SAVE_RECEPIE_SUCCESS', () => {
    let action, recepie;
    beforeEach(() => {
      recepie = { name: 'some-name', description: 'some-description' }
      action = actions.saveRecepieSuccess('some-id', recepie)
    })
    it('has a correct type', () => {
      expect(action.type).toEqual(actionTypes.SAVE_RECEPIE_SUCCESS)
    })
    it('has a correct id value', () => {
      expect(action.id).toEqual('some-id')
    })
    it('has a correct recepie', () => {
      expect(action.recepie).toEqual(recepie)
    })
  })

  describe('SAVE_RECEPIE_FAIL', () => {
    let action;
    beforeEach(() => {
      action = actions.saveRecepieFail('some-error')
    })
    it('has a correct type', () => {
      expect(action.type).toEqual(actionTypes.SAVE_RECEPIE_FAIL)
    })
    it('has a correct error value', () => {
      expect(action.error).toEqual('some-error')
    })
  })


  describe('REMOVE_RECEPIE_SUCCESS', () => {
    let action;
    beforeEach(() => {
      action = actions.removeRecepieSuccess('some-id')
    })
    it('has a correct type', () => {
      expect(action.type).toEqual(actionTypes.REMOVE_RECEPIE_SUCCESS)
    })
    it('has a correct id value', () => {
      expect(action.id).toEqual('some-id')
    })
  })


  describe('FETCH_RECEPIES_START', () => {
    let action;
    beforeEach(() => {
      action = actions.fetchRecepiesStart()
    })
    it('has a correct type', () => {
      expect(action.type).toEqual(actionTypes.FETCH_RECEPIES_START)
    })
  })

  describe('FETCH_RECEPIES_SUCCESS', () => {
    let action;
    beforeEach(() => {
      action = actions.fetchRecepiesSuccess(['some-fetched-data'])
    })
    it('has a correct type', () => {
      expect(action.type).toEqual(actionTypes.FETCH_RECEPIES_SUCCESS)
    })

    it('has a correct fetched data', () => {
      expect(action.fetchedData).toEqual(['some-fetched-data'])
    })
  })

  describe('FETCH_RECEPIES_FAIL', () => {
    let action;
    beforeEach(() => {
      action = actions.fetchRecepiesFail('some-error')
    })
    it('has a correct type', () => {
      expect(action.type).toEqual(actionTypes.FETCH_RECEPIES_FAIL)
    })

    it('has a correct fetched data', () => {
      expect(action.error).toEqual('some-error')
    })
  })
})