import React, { lazy,Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery= lazy(()=> import( "./components/Grocery"))




const AppLayout=()=>{

  const[userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Abhishek Puri",
    };

    setUserName(data.name);
  },[])

  return(
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          {/* //Header */}
          <Header />
          <Outlet />
          {/* //Body
      //Footers */}
        </div>
      </UserContext.Provider>
    </Provider>

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
      path: "/grocery",
      element:(
        <Suspense fallback={<h1> Loading....</h1>}>
          <Grocery/>
        </Suspense>
      ),
    },
    // {
    //   path: "/kuch",
    //   element:<Kuch/>
    // },

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
    },
    {
      path:"/cart",
      element:<Cart/>
    }

  ],
  errorElement: <Error/>
  },
  
]);




const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
