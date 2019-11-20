import React from "react";

import Mammal from "./Mammal";

// To create a Provider component
// 1. we need to import the context we've created
import MammalContext from "../contexts/MammalContext";

const style = {
  display: "grid",
  gridTemplateColumns: "200px 80px 80px",
  gridAutoRows: "40px",
  gridColumnGap: "10px"
};

class App extends React.Component {
  state = {
    mammal: {
      name: "Dog",
      sound: "Bark"
    }
  };

  onMammalChange = mammal => {
    this.setState({
      mammal: mammal
    });
  };
  render() {
    return (
      <div style={style}>
        <p>Select an Animal:</p>
        <button
          onClick={() => this.onMammalChange({ name: "Dog", sound: "Bark" })}
        >
          Dog
        </button>
        <button
          onClick={() => this.onMammalChange({ name: "Cat", sound: "Miaw" })}
        >
          Cat
        </button>

        {/* 2. we need to wrap the component that needs to know about the context */}
        {/* 3. when we render context(MammalContext) Provider, we are going to assign a value to it */}
        {/* 4. we are going to pass the value the information that we want to update the context object with. in our case it is the state.mammal */}
        <MammalContext.Provider value={this.state.mammal}>
          <Mammal />
        </MammalContext.Provider>
        {/* <MammalContext.Provider value={{ name: "Dog", sound: "Bark" }}>
          <Mammal />
        </MammalContext.Provider>
        <MammalContext.Provider value={{ name: "Cat", sound: "Miaw" }}>
          <Mammal />
        </MammalContext.Provider>

        <MammalContext.Provider
          value={{ name: "Cat", sound: this.state.mammal.sound }}
        >
          <Mammal />
        </MammalContext.Provider>
        <Mammal /> */}
      </div>
    );
  }
}

export default App;
