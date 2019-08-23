import React from 'react'
import Checkbox from './AddPizzaFormCheckbox'

export default class AddPizzaForm extends React.Component {
  state = {
    name: "",
    description: "",
    checkboxes: {}
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  handleCheckboxChange = event =>
    this.setState({
      checkboxes: {
        ...this.state.checkboxes,
        [event.target.name]: !this.state.checkboxes[event.target.name]
      }
    })

  handleSubmit = event => {
    event.preventDefault()
    const name = this.state.name.trim()
    const description = this.state.description.trim()
    const ingredients = this.props.ingredients.reduce((array, ingredient) => {
      if (this.state.checkboxes[ingredient.id]) {
        array.push(ingredient.name)
      }
      return array
    }, [])

    if (this.checkSubmit(name, description, ingredients)) {
      this.props.addPizza({ name, description, ingredients })
      this.setState({
        name: "",
        description: "",
        ingredients: []
      })
    }
  }

  checkSubmit = (name, description, ingredients) => {
    if (!name) {
      alert("Please provide a valid pizza name.")
      return false
    }
    if (!description) {
      alert("Please provide a valid pizza description.")
      return false
    }
    if (!ingredients.length) {
      alert("Please select at least one pizza ingredient.")
      return false
    }
    return true
  }

  static getDerivedStateFromProps(props, state) {
    return ({
      ...state,
      checkboxes: props.ingredients.reduce((checkboxes, ingredient) => ({
        ...checkboxes,
        [ingredient.id]: state.checkboxes[ingredient.id] || false
      }), {})
    })
  }

  render() {
    return (
      <div>
        <h2>Add a pizza</h2>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description"
              value={this.state.description}
              onChange={this.handleChange} />
          </label>
          {this.props.ingredients
            .map(ingredient => {
              return (
                <Checkbox
                  key={ingredient.id}
                  id={ingredient.id}
                  name={ingredient.name}
                  isChecked={this.state.checkboxes[ingredient.id]}
                  onCheckboxChange={this.handleCheckboxChange}
                />
              )
            })}
          < input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}