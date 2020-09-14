import React, { Component } from "react";
import ProjList from "./ProjList";

class AllIndvProjs extends Component {
  render() {
    return (
      <main>
        <section>
          Filter by: <button>Project Type</button>
          <button>Project Value </button>
          <button>Latest </button>
          <button>Region </button>
        </section>
        <section>
          <ProjList />
        </section>
      </main>
    );
  }
}

export default AllIndvProjs;
