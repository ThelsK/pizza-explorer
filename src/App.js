import React from 'react';
import './App.css';
import PizzaListContainer from "./components/PizzaList/PizzaListContainer.js"
import PizzaDetailsContainer from "./components/PizzaDetails/PizzaDetailsContainer.js"
import AddPizzaFormContainer from "./components/AddPizzaForm/AddPizzaFormContainer.js"
import AddIngredientFormContainer from "./components/AddIngredientForm/AddIngredientFormContainer.js"

function App() {
  return (
    <div className="App">
      <PizzaListContainer />
      <PizzaDetailsContainer />
      <AddPizzaFormContainer />
      <AddIngredientFormContainer />
    </div>
  )
}

export default App;