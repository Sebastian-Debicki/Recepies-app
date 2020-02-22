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
    editPreparation: false,
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

  changeRecepieCalories = (e) => {
    const recepie = this.getRecepie()
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    recepie.modificationDate = currentDate;
    recepie.calories = e.target.value;
    if (e.target.value >= 0 && e.target.value <= 9998) {
      this.setState({ recepie })
      this.props.changeRecepieValues(this.state.recepie)
    }
  }
  changeRecepieName = (e) => {
    const recepie = this.getRecepie()
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    recepie.modificationDate = currentDate;
    recepie.name = e.target.value;
    this.setState({ recepie })
    this.props.changeRecepieValues(this.state.recepie)
  }
  changeRecepieDescription = (e) => {
    const recepie = this.getRecepie()
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    recepie.modificationDate = currentDate;
    recepie.description = e.target.value;
    this.setState({ recepie })
    this.props.changeRecepieValues(this.state.recepie)
  }
  changeRecepiePreparation = (e) => {
    const recepie = this.getRecepie()
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    recepie.modificationDate = currentDate;
    recepie.preparation = e.target.value;
    this.setState({ recepie })
    this.props.changeRecepieValues(this.state.recepie)
  }
  addIngredientHandler = (e) => {
    e.preventDefault();
    const id = uuid()
    const ingredientName = e.target.Ingredient.value;
    const recepie = this.getRecepie();
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    recepie.modificationDate = currentDate;
    recepie.ingredients.push({ id, name: ingredientName })
    this.setState({ recepie })
    this.props.changeRecepieValues(recepie)
    e.target.Ingredient.value = '';
  }
  deleteIngredientHandler = (id) => {
    const recepie = this.getRecepie();
    const currentDate = moment().format("DD.MM.YY HH:mm:ss");
    recepie.modificationDate = currentDate;
    const index = recepie.ingredients.findIndex(ing => ing.id === id)
    recepie.ingredients.splice(index, 1);
    this.setState({ recepie })
    this.props.changeRecepieValues(recepie)
  }

  editRecepieHandler = (type) => {
    if (type === 'name') this.setState({ editName: !this.state.editName, editDescription: false, editIngredients: false, editPreparation: false, editCalories: false })
    if (type === 'description') this.setState({ editDescription: !this.state.editDescription, editName: false, editIngredients: false, editPreparation: false, editCalories: false })
    if (type === 'ingredients') this.setState({ editIngredients: !this.state.editIngredients, editDescription: false, editName: false, editPreparation: false, editCalories: false })
    if (type === 'preparation') this.setState({ editPreparation: !this.state.editPreparation, editDescription: false, editIngredients: false, editName: false, editCalories: false })
    if (type === 'calories') this.setState({ editCalories: !this.state.editCalories, editPreparation: false, editDescription: false, editIngredients: false, editName: false })
  }

  render() {
    const recepie = this.getRecepie()
    let content;
    if (!recepie) content = <Spinner />
    else {
      content = (
        <div className="recepie" >
          <div className={this.props.open ? 'include-menu-box open' : 'include-menu-box'}>
            <h2 className="heading-secondary">Recepie</h2>
            <div className="recepie__box">
              <div className="recepie__edit-box">
                <div className="recepie__backdrop" onClick={() => this.editRecepieHandler('calories')}></div>
                <h3 className="recepie__heading">Calories <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editCalories ?
                  <Input class="input recepie__input--calories" type="number" min={0} value={recepie.calories} changed={this.changeRecepieCalories} /> :
                  <p className="recepie__description">{recepie.calories}</p>}
              </div>
              <div className="recepie__edit-box">
                <div className="recepie__backdrop" onClick={() => this.editRecepieHandler('name')}></div>
                <h3 className="recepie__heading">Name <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editName ?
                  <Input class="recepie__input recepie__input--name" value={recepie.name} changed={this.changeRecepieName} /> :
                  <p className="recepie__name">{recepie.name}</p>}
              </div>
              <div className="recepie__edit-box">
                <div className="recepie__backdrop" onClick={() => this.editRecepieHandler('description')}></div>
                <h3 className="recepie__heading">Description <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editDescription ?
                  <Input class="recepie__input recepie__input--description" value={recepie.description} changed={this.changeRecepieDescription} /> :
                  <p className="recepie__description">{recepie.description}</p>}
              </div>
              <div className="recepie__edit-box">
                <div className="recepie__backdrop" onClick={() => this.editRecepieHandler('ingredients')}></div>
                <h3 className="recepie__heading">Ingredients <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editIngredients &&
                  <form className="recepie__ingredients-form" onSubmit={this.addIngredientHandler}>
                    <Input class="input input--add-recepie" name="Ingredient" required={true} />
                    <Button class="btn btn--add-ingredient">Add</Button>
                  </form>}
                <ul className="recepie__ingredients-list">
                  {recepie.ingredients.map(ing => ing.name &&
                    <li key={ing.id} className="recepie__ingredients-list__ingredient">
                      {this.state.editIngredients &&
                        <Button class="btn" clicked={() => this.deleteIngredientHandler(ing.id)}><span className="recepie__delete-icon far fa-trash-alt"></span></Button>}
                      {ing.name}
                    </li>)}
                </ul>
              </div>
              <div className="recepie__edit-box">
                <div className="recepie__backdrop" onClick={() => this.editRecepieHandler('preparation')}></div>
                <h3 className="recepie__heading">Preparation <Button class="btn btn--edit">Edit</Button></h3>
                {this.state.editPreparation ?
                  <div className="input-box">
                    <textarea
                      className="input input--textarea"
                      placeholder="Preparation"
                      onChange={this.changeRecepiePreparation}
                      value={recepie.preparation}
                    ></textarea>
                  </div> :
                  <p className="recepie__preparation">{recepie.preparation}</p>}
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