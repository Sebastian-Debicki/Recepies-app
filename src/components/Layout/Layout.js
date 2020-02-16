import React from 'react';
import { connect } from 'react-redux';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Spinner from '../UI/Spinner/Spinner';
import HamburgerButton from '../UI/HamburgerButton/HamburgerButton';

const Layout = (props) => {
  const [open, setOpen] = React.useState(false)

  const togglerOpen = () => setOpen(!open)

  let layout = <Spinner />
  if (!props.loading) {
    layout =
      <div className="layout">
        <NavigationItems isAuth={props.isAuth} open={open} />
        {props.isAuth && <HamburgerButton clicked={togglerOpen} open={open} />}
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
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps)(Layout);