import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import moment from 'moment';
import { useAddRecepieState } from './useAddRecepieState';

const AddRecepie = (props) => {
  const { nameRecepieState, descriptionRecepieState, changeRecepieNameHandler, changeRecepieDescriptionHandler, setNameRecepieState, setDescriptionRecepieState } = useAddRecepieState()

  const addRecepieHandler = (e) => {
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    e.preventDefault();
    const recepie = {
      name: nameRecepieState,
      description: descriptionRecepieState,
      preparation: '',
      calories: 0,
      ingredients: [{ id: 1, name: '' }],
      userId: props.userId,
      addedDate: currentDate,
      modificationDate: currentDate,
      favorite: false,
    }
    props.saveRecepie(recepie, props.token)
    setNameRecepieState('');
    setDescriptionRecepieState('');
    props.closeModal()
  }

  return (
    <div className="add-recepie">
      <div className="heading-box u-margin-bottom-big u-margin-top-small">
        <h2 className="heading-secondary">Add Recepie</h2>
      </div>
      <form className="add-recepie__form" onSubmit={addRecepieHandler}>
        <Input
          class="input u-margin-bottom-big"
          type="text"
          required={true}
          name="Recepie name"
          changed={changeRecepieNameHandler}
          value={nameRecepieState}
        />
        <Input
          class="input u-margin-bottom-big"
          type="text"
          required={true}
          name="Short description"
          changed={changeRecepieDescriptionHandler}
          value={descriptionRecepieState}
        />
        <Button class="btn btn__primary">SUBMIT</Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveRecepie: (recepie, token) => { dispatch(actions.saveRecepie(recepie, token)) },
    closeModal: () => { dispatch(actions.closeModal()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecepie);