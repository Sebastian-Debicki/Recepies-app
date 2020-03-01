import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Spinner from '../UI/Spinner/Spinner';
import HamburgerButton from '../UI/HamburgerButton/HamburgerButton';
import Modal from '../UI/Modal/Modal';
import AddRecepieButton from '../UI/AddRecepieButton/AddRecepieButton';
import AddRecepie from '../AddRecepie/AddRecepie';

const Layout = ({ loading, isAuth, openNav, openModal, navTogglerHandler, openModalHandler, closeModalHandler, children }) => {

  let layout = <Spinner />
  if (!loading) {
    layout =
      <div className="layout">
        <NavigationItems isAuth={isAuth} open={openNav} />
        {isAuth && <HamburgerButton clicked={navTogglerHandler} open={openNav} />}
        {isAuth && <AddRecepieButton clicked={openModalHandler} open={openNav} />}
        {isAuth && <Modal open={openModal} closeModalHandler={closeModalHandler}><AddRecepie /></Modal>}
        <main>
          {children}
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
    openModal: state.open.modalOpen
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