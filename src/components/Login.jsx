import React, { Component } from "react";
import { observer } from "mobx-react";

class Login extends Component {
  state = {
    staffNumber: "",
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="staffNumber">Staff Number:</label>
          <input
            type="text"
            name="staffNumber"
            id="staffNumber"
            value={this.state.staffNumber}
            onChange={this.handleChange}
          />
          {this.props.currentUser.noResults && (
            <p>Incorrect Login. Enter your staff number.</p>
          )}
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.currentUser.fetchMetaData(this.state.staffNumber);
  };
}

export default observer(Login);
