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
            type="number"
            name="staffNumber"
            id="staffNumber"
            value={this.state.staffNumber}
            onChange={this.handleChange}
          />
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
    // console.log(this.props.currentUser);
  };
}

export default observer(Login);
