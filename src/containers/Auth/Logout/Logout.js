import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Redirect } from 'react-router-dom';

const Logout = ({ logout }) => {

  React.useEffect(() => {
    logout();
  })

  return (
    <Redirect to="/" />
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);