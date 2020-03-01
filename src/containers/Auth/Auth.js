import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import { useAuthState } from './useAuthState';

const Auth = ({ auth, isAuth, error }) => {
  const { controlsState, switchAuthTypeState, changeInputValuesHandler, switchAuthTypeHandler } = useAuthState();

  const controlsStateArr = [];
  for (let key in controlsState.controls) {
    controlsStateArr.push({
      id: key,
      config: controlsState.controls[key]
    })
  }

  const formSubmitHandler = (e) => {
    const { email, password } = controlsState.controls
    e.preventDefault();
    auth(email.value, password.value, switchAuthTypeState)
  }

  const form = controlsStateArr.map(formEl =>
    <Input
      class="input u-margin-bottom-small"
      key={formEl.id}
      value={formEl.config.value}
      required={formEl.config.required}
      changed={(e) => changeInputValuesHandler(e, formEl.id)}
      type={formEl.id}
      minLength={formEl.config.validation && formEl.config.validation.minLength}
      name={formEl.config.name}
      pattern="^\S+$"
    />)
  return (
    <div className="auth">
      {isAuth && <Redirect to="/recepies-list" />}
      <div className="auth__box">
        <div className="heading-box u-margin-bottom-small">
          <h2 className="heading-secondary">{switchAuthTypeState ? 'Sign Up' : 'Sign In'}</h2>
        </div>
        {error && <p className="auth__error-message">{error.message}</p>}
        <form className="auth__form" onSubmit={formSubmitHandler}>
          {form}
          <Button class="btn btn__primary">Submit</Button>
        </form>
        <Button class="btn btn--switcher" clicked={switchAuthTypeHandler}>Switch to: {switchAuthTypeState ? 'Sign In' : 'Sign Up'}</Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password, switchAuthType) => dispatch(actions.auth(email, password, switchAuthType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);