import React from 'react'

export default class AddIngredientForm extends React.Component {
  state = {
    name: ""
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = event => {
    event.preventDefault()
    const name = this.state.name.trim()

    if (this.checkSubmit(name)) {
      this.props.addIngredient({ name })
      this.setState({
        name: ""
      })
    }
  }

  checkSubmit = (name) => {
    if (!name) {
      alert("Please provide a valid ingredient name.")
      return false
    }
    return true
  }

  render() {
    return (
      <div>
        <h2>Add an ingredient</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Ingredient:
            <input type="text" name="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}