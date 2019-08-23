import React from 'react'
import AddIngredientForm from './AddIngredientForm'
import { connect } from 'react-redux'

class AddIngredientFormContainer extends React.Component {
  addIngredient = ingredient => {
    const id = this.props.nextIngredientId

    this.props.dispatch({
      type: 'ADD_INGREDIENT',
      payload: {
        id,
        ...ingredient
      }
    })

    this.props.dispatch({
      type: 'INCREASE_INGREDIENT_ID',
      payload: 1
    })
  }

  render() {
    return <AddIngredientForm addIngredient={this.addIngredient} />
  }
}

const mapStateToProps = state =>
  ({ nextIngredientId: state.nextIngredientId })

export default connect(mapStateToProps)(AddIngredientFormContainer)