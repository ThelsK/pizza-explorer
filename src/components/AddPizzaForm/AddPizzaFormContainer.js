import React from 'react'
import AddPizzaForm from './AddPizzaForm'
import { connect } from 'react-redux'

class AddPizzaFormContainer extends React.Component {
  addPizza = pizza => {
    const id = this.props.nextPizzaId

    this.props.dispatch({
      type: 'ADD_PIZZA',
      payload: {
        id,
        ...pizza
      }
    })

    this.props.dispatch({
      type: 'INCREASE_PIZZA_ID',
      payload: 1
    })
  }

  render() {
    return (<AddPizzaForm
      addPizza={this.addPizza}
      ingredients={this.props.ingredients}
    />)
  }
}

const mapStateToProps = state => {

  return { ingredients: state.ingredients, nextPizzaId: state.nextPizzaId }
}

export default connect(mapStateToProps)(AddPizzaFormContainer)