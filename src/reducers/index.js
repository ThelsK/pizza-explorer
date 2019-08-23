import { combineReducers } from 'redux'
import pizzas from './pizzas'
import selectedPizza from './selectedPizza'
import ingredients from './ingredients'
import nextPizzaId from './nextPizzaId'
import nextIngredientId from './nextIngredientId'

export default combineReducers({
  pizzas,
  selectedPizza,
  ingredients,
  nextPizzaId,
  nextIngredientId
})