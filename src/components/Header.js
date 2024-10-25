import { LOGO_URL } from "../utils/constants";
// import food_delivery_app_logo.jpg from "./src";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
   const[btnName,setBtnName]=useState("Login");

   const onlineStatus=useOnlineStatus();
   console.log(onlineStatus);

   

    return(
      <div className="flex justify-between shadow-lg lg:bg-pink-200 bg-yellow-200 sm:bg-green-200 mb-2">
        <div className="logo-container">
          <img className="w-60" src={LOGO_URL}/>
        </div>
        <div className="flex items-center ">
            <ul className="flex p-10 m-10 justify-between">
              <li className="px-4">
                Online Status: {onlineStatus?"💚":"🧧"  }
              </li>
              <li className="px-4"><Link to="/"> Home</Link></li>
              <li className="px-4">
                <Link to="/about"> About Us</Link>
               
              </li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4">
              <Link to="/grocery">Grocery</Link>
              </li>
              {/* <li>
              <Link to="/kuch">Kuch</Link>
              </li> */}
              <li className="px-4">Cart</li>
              <button className="login"
              onClick={()=>{
                btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
              }}
              
              >{btnName}</button>
            </ul>
        </div>
      </div>
    );
  };

export default Header;