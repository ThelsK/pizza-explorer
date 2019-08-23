import React from 'react'
import PizzaList from './PizzaList'
import { connect } from 'react-redux'

class PizzaListContainer extends React.Component {
  selectPizza = id => {
    this.props.dispatch({
      type: 'SELECT_PIZZA',
      payload: id
    })
  }

  render() {
    return (<PizzaList
      pizzas={this.props.pizzas}
      selectPizza={this.selectPizza}
    />)
  }
}

const mapStateToProps = state =>
  ({ pizzas: state.pizzas })

export default connect(mapStateToProps)(PizzaListContainer)