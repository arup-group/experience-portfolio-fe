// import React, { Component } from "react";
// import * as api from "../utils/api";
// import HomePage from "./HomePage";
// import { Router, Link } from "@reach/router";

// class LoginPage extends Component {
//   state = {
//     staffID: "",
//     staffMeta: {},
//     isLoading: true,
//   };

//   render() {
//     console.log(this.state);
//     const { staffMeta, isLoading, staffID } = this.state;
//     return (
//       <div>
//         <h3>Welcome to the Experience Portfolio!</h3>

//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="staffID">Enter staff ID</label>
//           <input
//             onChange={this.handleChange}
//             type="text"
//             id="staffID"
//             name="staffID"
//             value={this.state.staffID}
//           />

//           {/* <Link key="enter to Homepage" to={"/"}> */}
//           <button type="submit" key="enterButton">
//             {" "}
//             Enter!{" "}
//           </button>
//           {/* </Link> */}
//         </form>

//         <Router>
//           <HomePage path="/homepage" staffMeta={staffMeta} />
//         </Router>
//       </div>
//     );
//   }
//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { staffID } = event.target;
//     const staffId = staffID.value;
//     this.getStaffMeta(staffId);
//   };

//   getStaffMeta = (staffId) => {
//     api.getUserMeta(staffId).then((staffMeta) => {
//       this.setState({ staffMeta: staffMeta, isLoading: false });
//     });
//   };
// }

// export default LoginPage;
