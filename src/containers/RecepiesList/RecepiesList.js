import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { sort } from '../../helpers/sort';
import Search from '../../components/Search/Search';
import Recepie from './Recepie/Recepie';

class RecepiesList extends Component {
  state = { optionSortBy: 'Last modification date', optionIncDec: 'Increasing', searchValue: '' }

  componentDidMount() {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    this.props.fetchRecepies(token, userId)
    // window.location.reload()
  }

  changeSingleRecepieOptionHandler = (e, recepie) => {
    if (e.target.value === 'delete') this.props.removeRecepieHandler(recepie.id)
    if (e.target.value === 'favoriteAdd') {
      recepie.favorite = true;
      this.props.switchFavoriteHandler(recepie)
    }
    if (e.target.value === 'favoriteRemove') {
      recepie.favorite = false;
      this.props.switchFavoriteHandler(recepie)
    }
  }

  searchInputHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  changeSelectValueSortBy = (option) => {
    this.setState({ optionSortBy: option })
  }

  changeSelectValueIncreasing = (option) => {
    this.setState({ optionIncDec: option })
  }

  render() {
    const sortedRecepies = sort(this.props.recepies, this.state.optionSortBy, this.state.optionIncDec)
    const filteredAndSortedRecepies = sortedRecepies.filter(recepie => recepie.name.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
    let title, recepiesList;
    if (this.props.match.path === '/recepies-list') {
      title = 'List of recepies';
      recepiesList = filteredAndSortedRecepies
    };
    if (this.props.match.path === '/favorites') {
      title = 'FAVORITES';
      recepiesList = filteredAndSortedRecepies.filter(recepie => recepie.favorite);
    };

    let content = <Spinner />

    if (!this.props.loading) {
      content = recepiesList.map(recepie =>
        <Recepie recepie={recepie} key={recepie.id} changeSingleRecepieOptionHandler={this.changeSingleRecepieOptionHandler} />
      )
    }

    return (
      <div className="recepies-list">
        <div className={this.props.open ? "include-menu-box open" : "include-menu-box"}>
          <div className="heading-box u-heading-margin-top u-margin-bottom-small">
            <h2 className="heading-secondary">{title}</h2>
          </div>
          <Search
            searchInputHandler={this.searchInputHandler}
            searchValue={this.state.searchValue}
            changeSelectValueSortBy={this.changeSelectValueSortBy}
            changeSelectValueIncreasing={this.changeSelectValueIncreasing}
          />
          <ul className="recepies-list__list">
            {content}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.open.navOpen,
    recepies: state.recepies.recepiesList,
    loading: state.recepies.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchFavoriteHandler: (recepie) => { dispatch(actions.changeRecepieValues(recepie)) },
    removeRecepieHandler: (id) => { dispatch(actions.removeRecepie(id)) },
    fetchRecepies: (token, userId) => { dispatch(actions.fetchRecepies(token, userId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecepiesList);