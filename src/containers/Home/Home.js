import React from 'react';
import Link from '../../components/UI/Link/Link';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = ({ isAuth }) => {

  return (
    <div className="home">
      {isAuth && <Redirect to="/recepies-list" />}
      <div className="home__text-box">
        <h1 className="heading-primary u-margin-bottom-big">
          <span className="heading-primary--main">Recepies</span>
          <span className="heading-primary--sub">Your own cooking book</span>
        </h1>
        <Link class="link btn__primary" route="/auth">Sign in</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Home);