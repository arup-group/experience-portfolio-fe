import React from "react";

// imports from mobx
import { observer } from "mobx-react";

function HeaderInfo(props) {
  return (
    <>
      <section>
        <h3>Experience Portfolio</h3>
        <p>
          {props.infoViews.mainStatement}
          <br />
          {props.infoViews.clientStatement}
          <br />
          {props.infoViews.randomStatementBusiness}
        </p>
      </section>
    </>
  );
}

export default observer(HeaderInfo);
