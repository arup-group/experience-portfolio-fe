import React, { Component } from "react";

class ProjList extends Component {
  render() {
    return (
      <div className="projectsList">
        <ul>
          {/* map over the projects */}
          <li className="indvProject">
            <h5> Proj 1 - General Project Description</h5>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus
              quibusdam molestiae adipisci nulla dignissimos non! Dicta, aliquid
              autem. Odit quasi non quod fuga, culpa illo voluptatum quos fugiat
              veritatis.{" "}
            </p>
            <h5> Proj 1 - Individual Project Contribution</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              exercitationem unde velit quaerat, ut odio ex labore atque
              nesciunt saepe ipsam, corporis, rerum consectetur magnam
              dignissimos aut quod dicta tempore!
            </p>
            <button>Update project!</button> <button> Show/Hide</button>
          </li>
          <li className="indvProject">
            <h5> Proj 2 - General Project Description</h5>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus
              quibusdam molestiae adipisci nulla dignissimos non! Dicta, aliquid
              autem. Odit quasi non quod fuga, culpa illo voluptatum quos fugiat
              veritatis.{" "}
            </p>
            <h5> Proj 2 - Individual Project Contribution</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              exercitationem unde velit quaerat, ut odio ex labore atque
              nesciunt saepe ipsam, corporis, rerum consectetur magnam
              dignissimos aut quod dicta tempore!
            </p>
            <button>Update project!</button> <button> Show/Hide</button>
          </li>
          <li className="indvProject">
            <h5> Proj 3 - General Project Description</h5>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus
              quibusdam molestiae adipisci nulla dignissimos non! Dicta, aliquid
              autem. Odit quasi non quod fuga, culpa illo voluptatum quos fugiat
              veritatis.{" "}
            </p>
            <h5> Proj 3 - Individual Project Contribution</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              exercitationem unde velit quaerat, ut odio ex labore atque
              nesciunt saepe ipsam, corporis, rerum consectetur magnam
              dignissimos aut quod dicta tempore!
            </p>
            <button>Update project!</button> <button> Show/Hide</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjList;
