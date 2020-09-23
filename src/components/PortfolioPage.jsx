import React, { Component } from "react";

// React Components
// import Photo from "./Photo";
// import ProfInfo from "./ProfInfo";
// import IntroParag from "./IntroParag";
// import ValueStatement from "./ValueStatement";
// import AllIndvProjs from "./AllIndvProjs";

import KeywordsMenu from "./KeywordsMenu";

import { observer } from "mobx-react";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioTable from "./PortfolioTable";

class PortfolioPage extends Component {
  render() {
    const { portfolioStaff } = this.props.currentUser;
    console.log(portfolioStaff);
    return (
      <>
        <div className="PortfolioPage">
          Portfolio Page
          <section>
            <PortfolioFilters
              currentUser={this.props.currentUser}
              fullDescProjList={this.props.fullDescProjList}
            />
            {/* <KeywordsMenu currentUser={this.props.currentUser} /> */}
          </section>
          <section>
            {/* <ul>
              {portfolioStaff.length > 0 &&
                portfolioStaff.map((staff) => {
                  return (
                    <li key={staff.StaffID}>
                      {staff.StaffName} Project count: {staff.ProjectCount}{" "}
                      Total hours: {staff.TotalHrs}
                    </li>
                  );
                })}
            </ul> */}
            <PortfolioTable portfolioStaff={portfolioStaff} />
          </section>
        </div>
      </>
    );
  }
}

export default observer(PortfolioPage);
