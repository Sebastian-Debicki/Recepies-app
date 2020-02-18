import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Link from '../../components/UI/Link/Link';
import Spinner from '../../components/UI/Spinner/Spinner';

class RecepiesList extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    this.props.fetchRecepies(token, userId)
  }

  render() {
    let recepiesList = <Spinner />

    if (!this.props.loading) {
      recepiesList = this.props.recepies.map(recepie =>
        <li key={recepie.id} className="recepies-list__recepie">
          <Link class="recepies-list__recepie__link" route={`/recepies-list/${recepie.id}`}>
            <h3 className="heading-tertiary">{recepie.name}</h3>
            <span className="recepies-list__recepie__calories">800 kcal</span>
            <p>{recepie.description}</p>
          </Link>
          <span className="recepies-list__recepie__icon">&rarr;</span>
        </li>
      )
    }

    return (
      <div className="recepies-list">
        <div className={this.props.open ? "include-menu-box open" : "include-menu-box"}>
          <h2 className="heading-secondary u-margin-bottom-big">Recepies</h2>
          <ul className="recepies-list__list">
            {recepiesList}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    open: state.open.navOpen,
    recepies: state.recepies.recepiesList,
    loading: state.recepies.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecepies: (token, userId) => { dispatch(actions.fetchRecepies(token, userId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecepiesList);