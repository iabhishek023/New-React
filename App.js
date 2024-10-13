import React from "react";
import ReactDOM from "react-dom";

// const heading= React.createElement("h1",{id:"heading"},"Happiness is the key");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//JSX(transpiled before it reaches the js), 
//Babel=>transpiling is done by parcel by the package babel
//React Element
const jsxheading = <h1 id="heading">happiness is the key with JSX</h1>

const Title = () => (
  <h1 id="heading">I got A Title</h1>
);

const Footer=()=>(
  <h2>The Last is the footer</h2>
);

const SemiFooter=()=>(
  <h1>Me bolte Semi Footer</h1>
)

//React component:-
//1. class based component
//2. functional component

//React functional component

//Component Composition
const HeadingComponent = () => (
  <div>
    <Title/>
    {jsxheading}
    <h1 id="heading" >happiness is the key with component</h1>
    <SemiFooter/>
    <Footer/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)