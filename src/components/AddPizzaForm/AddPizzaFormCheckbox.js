import React from "react";

export default class Checkbox extends React.Component {
  render() {
    return (
      <label>
        <input
          type="checkbox"
          name={this.props.id}
          checked={this.props.isChecked}
          onChange={this.props.onCheckboxChange}
        />
        {this.props.name}
      </label>
    )
  }
}