import React from "react";

import MammalContext from "../contexts/MammalContext";

class MammalName extends React.Component {
  renderMammalName = mammal => mammal.name;

  render() {
    return (
      <div>
        <MammalContext.Consumer>
          {contextObject => this.renderMammalName(contextObject)}
        </MammalContext.Consumer>
      </div>
    );
  }
}

export default MammalName;
