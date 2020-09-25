import React from "react";

// imports from mobx
import { observer } from "mobx-react";

function HeaderInfo(props) {
  return (
    <>
      <p>
        {props.infoViews.mainStatement}
        <br />
        {props.infoViews.clientStatement}
        <br />
        {props.infoViews.randomStatementBusiness}
      </p>
    </>
  );
}

export default observer(HeaderInfo);
