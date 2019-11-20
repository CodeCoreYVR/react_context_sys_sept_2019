import React from "react";

import MammalContext from "../contexts/MammalContext";

class MammalSound extends React.Component {
  static contextType = MammalContext;
  // contextType property needs to be called exactly the same
  // so, if you call it anything else, it's not gonna work
  // it has to be called exactly contextType
  render() {
    return <div>{this.context.sound}</div>;
  }
}

// static keyword adds a property to class itself
// which is identical to:
// MammalSound.contextType = MammalContext;
// You can setup the contextType by making use of either methods

export default MammalSound;
