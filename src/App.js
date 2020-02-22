import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Auth from './containers/Auth/Auth';
import firebase from 'firebase';
import Logout from './containers/Auth/Logout/Logout';
import RecepiesList from './containers/RecepiesList/RecepiesList';
import RecepiePage from './containers/RecepiePage/RecepiePage';

var firebaseConfig = {
  apiKey: "AIzaSyBlJ0x4RZjgSsDawoyWN5UDKiqh6Jm9jLA",
  authDomain: "to-do-app-a449a.firebaseapp.com",
  databaseURL: "https://to-do-app-a449a.firebaseio.com",
  projectId: "to-do-app-a449a",
  storageBucket: "to-do-app-a449a.appspot.com",
  messagingSenderId: "88421345175",
  appId: "1:88421345175:web:83b6b77450dcdac9f286d2",
  measurementId: "G-QCB3J2R6XH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignIn()
  }

  render() {
    return (
      <>
        <Layout>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/recepies-list" exact component={RecepiesList} />
          <Route path="/favorites" exact component={RecepiesList} />
          <Route path="/recepies-list/:id" component={RecepiePage} />
        </Layout>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.onTryAutoSignIn())
  }
}

export default connect(null, mapDispatchToProps)(App);
