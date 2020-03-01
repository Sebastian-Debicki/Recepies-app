import * as actions from '../../../store/actions/open';
import * as actionTypes from '../../../store/actions/actionTypes';

describe('open reducer actions', () => {
  it('NAV_TOGGLE - has a correct type', () => {
    const action = actions.navToggler();
    expect(action.type).toEqual(actionTypes.NAV_TOGGLE);
  })

  it('NMODAL_OPEN - has a correct type', () => {
    const action = actions.openModal();
    expect(action.type).toEqual(actionTypes.MODAL_OPEN);
  })

  it('NMODAL_CLOSE - has a correct type', () => {
    const action = actions.closeModal();
    expect(action.type).toEqual(actionTypes.MODAL_CLOSE);
  })
})