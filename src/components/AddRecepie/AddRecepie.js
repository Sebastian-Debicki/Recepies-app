import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import moment from 'moment';

const AddRecepie = (props) => {
  const [nameRecepieState, setNameRecepieState] = React.useState('');
  const [descriptionRecepieState, setDescriptionRecepieState] = React.useState('');

  const changeRecepieNameHandler = (e) => setNameRecepieState(e.target.value)
  const changeRecepieDescriptionHandler = (e) => setDescriptionRecepieState(e.target.value);

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
      <h2 className="heading-secondary u-margin-bottom-small u-center">Add Recepie</h2>
      <form className="add-recepie__form" onSubmit={addRecepieHandler}>
        <Input
          class="input"
          type="text"
          required={true}
          name="Recepie name"
          changed={changeRecepieNameHandler}
          value={nameRecepieState}
        />
        <Input
          class="input"
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