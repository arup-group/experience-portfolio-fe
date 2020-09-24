import React, { Component } from "react";
import { observer } from "mobx-react";
import PorfolioCVToggle from "./PorfolioCVToggle";

class PortfolioTable extends Component {
  renderTableHeader = (headersArray) => {
    return headersArray.map((header) => {
      return <th key={header}> {header} </th>;
    });
  };

  renderTableData = (portfolioStaffArray) => {
    return portfolioStaffArray.map((staff, index) => {
      const {
        StaffName,
        ProjectCount,
        TotalHrs,
        GradeLevel,
        DisciplineName,
      } = staff;
      return (
        <tr key={StaffName}>
          <td>{StaffName} </td>
          <td>{ProjectCount} </td>
          <td>{TotalHrs} </td>
          <td>{GradeLevel} </td>
          <td>{DisciplineName} </td>
          <td>
            {" "}
            <PorfolioCVToggle
              portfolioStaff={portfolioStaffArray}
              index={index}
              currentUser={this.props.currentUser}
            />{" "}
          </td>
        </tr>
      );
    });
  };
  render() {
    const headers = [
      "Staff Name",
      "Project Count",
      "Total Hours",
      "Grade Level",
      "Discipline Name",
      "Create CV",
    ];
    const { portfolioStaff } = this.props;
    return (
      <div>
        <h3> Results table</h3>
        <table id="staff">
          <tbody>
            <tr>{this.renderTableHeader(headers)}</tr>
            {this.renderTableData(portfolioStaff)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default observer(PortfolioTable);
