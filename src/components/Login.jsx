import React, { Component } from "react";
import * as api from "../utils/api";
import HomePage from "./HomePage";
import { Router } from "@reach/router";

class Login extends Component {
  state = {
    staffID: "",
    staffMeta: {},
  };

  render() {
    const { staffMeta } = this.state;
    return (
      <div>
        <h3>Welcome to the Experience Portfolio!</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="staffID">Enter staff ID</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="staffID"
            name="staffID"
            value={this.state.staffID}
          />
          <button type="submit" key="enterButton">
            {" "}
            Enter!{" "}
          </button>
        </form>
        <Router>
          <HomePage path="/" staffMeta={staffMeta} />
        </Router>
      </div>
    );
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { staffID } = event.target;
    const staffId = staffID.value;
    api.getUserMeta(staffId).then((staffMeta) => {
      this.setState({ staffMeta: staffMeta });
    });
    console.log(this.state);
  };
}

export default Login;
