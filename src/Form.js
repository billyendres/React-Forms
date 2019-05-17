import React, { Component } from "react";
import uuid from "uuid";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "", id: uuid() };
  }

  handleChange = evt => {
    //Prevent Page Refresh
    evt.preventDefault();
    //user evt.target. to setState on multiple form properties
    this.setState({ [evt.target.name]: evt.target.value });
    this.setState({ [evt.target.email]: evt.target.value });
    this.setState({ [evt.target.password]: evt.target.value });
  };

  handleSubmit = evt => {
    alert(`you typed: ${this.state.username}`);
    //Reset State to blank
    this.setState({ username: "" });
  };

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username" />
          <input
            id={uuid()}
            type="text"
            //Add Name property to connect with evt.target.name in setState
            name="username"
            placeholder="User Name"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email" />

          <input
            id={uuid()}
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password" />

          <input
            id={uuid()}
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}
export default Form;
