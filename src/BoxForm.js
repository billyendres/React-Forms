import React, { Component } from "react";
import uuid from "uuid";

class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
  }

  handleChange = evt => {
    //Prevent Page Refresh
    evt.preventDefault();
    //user evt.target.name to setState on multiple form properties
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({ height: "", width: "", color: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height" />
          <input
            id="height"
            type="text"
            //Add Name property to connect with evt.target.name in setState
            name="height"
            placeholder="Height"
            value={this.state.height}
            onChange={this.handleChange}
          />

          <label htmlFor="width" />
          <input
            id="width"
            type="text"
            //Add Name property to connect with evt.target.name in setState
            name="width"
            placeholder="Width"
            value={this.state.width}
            onChange={this.handleChange}
          />

          <label htmlFor="color" />
          <input
            id="color"
            type="text"
            //Add Name property to connect with evt.target.name in setState
            name="color"
            placeholder="Color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add New Box</button>
      </form>
    );
  }
}

export default BoxForm;
