import React, { Component } from "react";
import AboutEP from "./AboutEP";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class HomePage extends Component {
  state = {
    staffID: "",
    staffMeta: {},
    isLoading: true,
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header staffMeta={this.state.staffMeta} />
        <AboutEP />
        <>
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
          <Link to={`/${this.state.staffID}`}> Personal CV </Link>
        </>
        <Footer />
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
    this.getStaffMeta(staffId);
  };

  getStaffMeta = (staffId) => {
    api.getUserMeta(staffId).then((staffMeta) => {
      this.setState({ staffMeta: staffMeta, isLoading: false });
    });
  };
}

export default HomePage;
