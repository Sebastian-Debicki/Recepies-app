import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import uuid from 'uuid';
import moment from 'moment';

class RecepiePage extends Component {
  state = {
    recepie: '',
    editName: false,
    editDescription: false,
    editIngredients: false,
    editCalories: false,
  }
  componentDidMount() {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    this.props.fetchRecepies(token, userId);
  }

  getRecepie = () => {
    const recepie = this.props.recepies.find(recepie => recepie.id === this.props.match.params.id);
    return recepie
  }

  editRecepieHandler = (type) => {
    if (type === 'name') this.setState({ editName: !this.state.editName, editDescription: false, editIngredients: false, editCalories: false })
    if (type === 'description') this.setState({ editDescription: !this.state.editDescription, editName: false, editIngredients: false, editCalories: false })
    if (type === 'ingredients') this.setState({ editIngredients: !this.state.editIngredients, editDescription: false, editName: false, editCalories: false })
    if (type === 'calories') this.setState({ editCalories: !this.state.editCalories, editDescription: false, editIngredients: false, editName: false })
  }

  changeRecepieValue = (e, type, ingId) => {
    e.preventDefault()
    const recepie = this.getRecepie();
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    recepie.modificationDate = currentDate;
    switch (type) {
      case 'calories': if (e.target.value >= 0 && e.target.value <= 9998) recepie.calories = e.target.value;
        break;
      case 'name': recepie.name = e.target.value;
        break;
      case 'description': recepie.description = e.target.value;
        break;
      case 'preparation': recepie.preparation = e.target.value;
        break;
      case 'addIngredient':
        const id = uuid()
        recepie.ingredients.push({ id, name: e.target.Ingredient.value })
        e.target.Ingredient.value = '';
        break;
      case 'deleteIngredient':
        const index = recepie.ingredients.findIndex(ing => ing.id === ingId)
        recepie.ingredients.splice(index, 1);
        break
      default: return recepie
    }
    this.setState({ recepie })
    this.props.changeRecepieValues(this.state.recepie)
  }

  render() {
    const recepie = this.getRecepie()
    let content;
    if (!recepie) content = <Spinner />
    else {
      content = (
        <div className="recepie-page" >
          <div className={this.props.open ? 'include-menu-box open' : 'include-menu-box'}>
            <div className="heading-box u-margin-bottom-small u-heading-margin-top">
              <h2 className="heading-secondary">Recepie</h2>
            </div>
            <div className="recepie-page__box">
              <div className="recepie-page__edit-box">
                <div className="recepie-page__backdrop" onClick={() => this.editRecepieHandler('calories')}></div>
                <h3 className="heading-quaternary">Calories <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editCalories ?
                  <Input class="input input--calories" type="number" min={0} value={recepie.calories} changed={(e) => this.changeRecepieValue(e, 'calories')} /> :
                  <p className="recepie-page__text">{recepie.calories}</p>}
              </div>
              <div className="recepie-page__edit-box">
                <div className="recepie-page__backdrop" onClick={() => this.editRecepieHandler('name')}></div>
                <h3 className="heading-quaternary">Name <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editName ?
                  <Input class="input" value={recepie.name} changed={(e) => this.changeRecepieValue(e, 'name')} /> :
                  <p className="recepie-page__name">{recepie.name}</p>}
              </div>
              <div className="recepie-page__edit-box">
                <div className="recepie-page__backdrop" onClick={() => this.editRecepieHandler('description')}></div>
                <h3 className="heading-quaternary">Description <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editDescription ?
                  <Input class="input" value={recepie.description} changed={(e) => this.changeRecepieValue(e, 'description')} /> :
                  <p className="recepie-page__text">{recepie.description}</p>}
              </div>
              <div className="recepie-page__edit-box">
                <div className="recepie-page__backdrop" onClick={() => this.editRecepieHandler('ingredients')}></div>
                <h3 className="heading-quaternary">Ingredients <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editIngredients &&
                  <form className="recepie-page__ingredients-form" onSubmit={(e) => this.changeRecepieValue(e, 'addIngredient')}>
                    <Input class="input input--add-recepie" name="Ingredient" required={true} />
                    <Button class="btn btn--add-ingredient">Add</Button>
                  </form>}
                <ul className="recepie-page__ingredients-list">
                  {recepie.ingredients.map(ing => ing.name &&
                    <li key={ing.id} className="recepie-page__ingredients-list__ingredient">
                      {this.state.editIngredients &&
                        <Button class="btn" clicked={(e) => this.changeRecepieValue(e, 'deleteIngredient', ing.id)}><span className="recepie-page__delete-icon far fa-trash-alt"></span></Button>}
                      {ing.name}
                    </li>)}
                </ul>
              </div>
              <div className="recepie-page__edit-box">
                <h3 className="heading-quaternary">Preparation <Button class="btn btn--edit">Edit</Button></h3>
                <div className="input-box">
                  <textarea
                    className="input input--textarea"
                    onChange={(e) => this.changeRecepieValue(e, 'preparation')}
                    value={recepie.preparation}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <>
        {content}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    recepies: state.recepies.recepiesList,
    open: state.open.navOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecepies: (token, userId) => { dispatch(actions.fetchRecepies(token, userId)) },
    changeRecepieValues: (recepie, token) => { dispatch(actions.changeRecepieValues(recepie, token)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecepiePage);