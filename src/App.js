import React from "react";
import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


// const heading= React.createElement("h1",{id:"heading"},"Happiness is the key");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//JSX(transpiled before it reaches the js), 
//Babel=>transpiling is done by parcel by the package babel
//React Element
// const jsxheading = <h1 id="heading">happiness is the key with JSX</h1>

// const Title = () => (
//   <h1 id="heading">I got A Title</h1>
// );

// const Footer=()=>(
//   <h2>The Last is the footer</h2>
// );

// const SemiFooter=()=>(
//   <h1>Me bolte Semi Footer</h1>
// )

//React component:-
//1. class based component
//2. functional component

//React functional component

//Component Composition

// const HeadingComponent = () => (
//   <div>
//     <Title/>
//     {jsxheading}
//     <h1 id="heading" >happiness is the key with component</h1>
//     <SemiFooter/>
//     <Footer/>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />)


const AppLayout=()=>{
  return(
    <div className="app">
      {/* //Header */}
      <Header/>
      <Outlet/>
      {/* //Body
      //Footers */}
    </div>

  )
}


const appRouter=createBrowserRouter([ 
  {
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path: "/",
      element:<Body/>
    },

    {
      path: "/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
  
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }

  ],
  errorElement: <Error/>
  },
  
]);




const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
