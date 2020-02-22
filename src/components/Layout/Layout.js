import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Spinner from '../UI/Spinner/Spinner';
import HamburgerButton from '../UI/HamburgerButton/HamburgerButton';
import Modal from '../UI/Modal/Modal';
import AddRecepieButton from '../UI/AddRecepieButton/AddRecepieButton';
import AddRecepie from '../AddRecepie/AddRecepie';

const Layout = (props) => {

  let layout = <Spinner />
  if (!props.loading) {
    layout =
      <div className="layout">
        <NavigationItems isAuth={props.isAuth} open={props.openNav} />
        {props.isAuth && <HamburgerButton clicked={props.navTogglerHandler} open={props.openNav} />}
        {props.isAuth && <AddRecepieButton clicked={props.openModalHandler} open={props.openNav} />}
        {props.isAuth && <Modal open={props.modalOpen} closeModalHandler={props.closeModalHandler}><AddRecepie /></Modal>}
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
    openNav: state.open.navOpen,
    modalOpen: state.open.modalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navTogglerHandler: () => { dispatch(actions.navToggler()) },
    closeModalHandler: () => { dispatch(actions.closeModal()) },
    openModalHandler: () => { dispatch(actions.openModal()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);