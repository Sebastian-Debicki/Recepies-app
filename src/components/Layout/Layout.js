import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Spinner from '../UI/Spinner/Spinner';
import HamburgerButton from '../UI/HamburgerButton/HamburgerButton';

const Layout = (props) => {

  let layout = <Spinner />
  if (!props.loading) {
    layout =
      <div className="layout">
        <NavigationItems isAuth={props.isAuth} open={props.open} />
        {props.isAuth && <HamburgerButton clicked={props.navToggler} open={props.open} />}
        <main>
          {props.children}
        </main>
      </div>
  }

  return (
    <>
      {layout}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
    loading: state.auth.loading,
    open: state.open.open
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navToggler: () => { dispatch(actions.navToggler()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);