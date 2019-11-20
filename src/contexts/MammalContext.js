// The purpose of this file is to create a context object
// and export it
// The reason we are putting it into a separate file,
// is that we can only import it to the component
// use our MammalContext

import React from "react";

// This 👇 is all we to do to create a context object
const context = React.createContext({ name: "Hippo", sound: "Moooo" });
// Note: we can pass any type of data as default value to context object

// console.log("context: ", context);
export default context;

// To get the information out:
// - We need to create a contextType inside the component uses it
// which is going to link the component to the context object
// - then to reference information inside the context object,
// we are going to make use of this.context property
