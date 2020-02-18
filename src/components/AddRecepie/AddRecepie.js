import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const AddRecepie = (props) => {
  const [nameRecepieState, setNameRecepieState] = React.useState('');
  const [descriptionRecepieState, setDescriptionRecepieState] = React.useState('');

  const changeRecepieNameHandler = (e) => setNameRecepieState(e.target.value)
  const changeRecepieDescriptionHandler = (e) => setDescriptionRecepieState(e.target.value);

  const addRecepieHandler = (e) => {
    e.preventDefault();
    const recepie = {
      name: nameRecepieState,
      description: descriptionRecepieState,
      calories: null,
      ingredients: [],
      userId: props.userId
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
        <div className="input-box">
          <textarea
            className="input input--textarea"
            placeholder="Short description..."
            id="description"
            onChange={changeRecepieDescriptionHandler}
            value={descriptionRecepieState}
          ></textarea>
          <label className="input__label" htmlFor='description'>Description...</label>
        </div>

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