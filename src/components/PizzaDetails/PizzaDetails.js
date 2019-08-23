import React from 'react'

export default function PizzaDetails(props) {
  return (
    <div>
      <h2>{props.pizza.name}</h2>

      <p><i>{props.pizza.description}</i></p>

      <ul>
        {props.pizza.ingredients.map(ingredient =>
          <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </div>
  )
}