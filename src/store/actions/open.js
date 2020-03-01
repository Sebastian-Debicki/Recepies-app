import * as actionTypes from './actionTypes';

export const navToggler = () => {
  return {
    type: actionTypes.NAV_TOGGLE
  }
}

export const openModal = () => {
  return {
    type: actionTypes.MODAL_OPEN
  }
}

export const closeModal = () => {
  return {
    type: actionTypes.MODAL_CLOSE
  }
}