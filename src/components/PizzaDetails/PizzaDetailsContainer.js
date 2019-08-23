import React from 'react'
import { connect } from 'react-redux'
import PizzaDetails from './PizzaDetails'

class PizzaDetailsContainer extends React.Component {
  render() {
    return (
      this.props.pizza
        ? <PizzaDetails pizza={this.props.pizza} />
        : null
    )
  }
}

const mapStateToProps = state => {
  if (state.selectedPizza) {
    return {
      pizza: state.pizzas.find(pizza =>
        pizza.id === state.selectedPizza)
    }
  }
  return {}
}

export default connect(mapStateToProps)(PizzaDetailsContainer)