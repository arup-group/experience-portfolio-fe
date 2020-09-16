import React, { Component } from "react";
import { observer } from "mobx-react";
import { render } from "@testing-library/react";

class UserCard extends Component {
  // console.log(this.props);
  // this.props.currentUser.fetchUser();
  state = {
    staffNumber: "",
  };

  render() {
    console.log(this.props);
    this.props.currentUser.fetchUser();
    console.log(this.state);
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
          <button
            type="submit"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   console.dir(e.target);
            //   this.props.currentUser.fetchUser();
            //   console.log(this.props.currentUser);
            // }}
          >
            Sign In
          </button>
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
    const { staffNumber } = event.target;
    const staffID = staffNumber.value;
    this.props.currentUser.fetchUser(staffID);
    console.log(this.props.currentUser);
  };
}

export default observer(UserCard);
