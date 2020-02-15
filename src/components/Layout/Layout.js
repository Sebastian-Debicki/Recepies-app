import React from 'react';
import { connect } from 'react-redux';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Spinner from '../UI/Spinner/Spinner';

const Layout = (props) => {

  let layout = <Spinner />
  if (!props.loading) {
    layout =
      <div className="layout">
        <NavigationItems isAuth={props.isAuth} />
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