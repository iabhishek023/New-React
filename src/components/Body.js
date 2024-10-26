import RestaurantCard ,{withPromtedLabel}from "./RestaurantCard";
import {useState,useEffect} from "react";
// import { resList } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{

    const [listOfRest,setListOfRest]=useState([]);
    const [filteredRest,setFilteredRest]=useState([]);

    const [searchText,setSearchText]=useState("");
    console.log(listOfRest);

    const RestaurantCardPromoted=withPromtedLabel(RestaurantCard);

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async()=>{
      const data= await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

      const json=await data.json();

      console.log("BodyText")
      

      //Option Chaining
      setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //Conditional Rendering
  
  const onlineStatus=useOnlineStatus();

  if(onlineStatus===false)
    return(
      <h1>Looks like you are offline,check your internet connection
        
      </h1>
    )
  
  

    return listOfRest.length===0?<Shimmer/>:(
      <div className="body">
        <div className="filter flex ">
          <div className="search m-4 p-4">
            <input  type="text" 
            
               className="search-box  border border-black "
               placeholder="Search.."
              
               value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
               }}
               />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={()=>{
               console.log(searchText);

               const filteredRest= listOfRest.filter(
                 (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
               );

               setFilteredRest(filteredRest)
            }}>Search</button>
            
          </div>
          <div className="px-4 py-2  flex items-center">
            <button 
               className="px-4 py-2 bg-gray-300 m-3 rounded-lg "
               onClick={()=>{
                   const filteredList=listOfRest.filter(
                       (res)=>res.info.avgRating>=4.4
                    );

                       //console.log(resList); 
                       setFilteredRest(filteredList);                      
                    }
            }
            >Top rated Restaurant</button>

           </div>
        </div>
        <div className="res-container flex flex-wrap">
            {filteredRest.map((restaurant)=>(
               <Link 
                key={restaurant.info.id}
               to={"/restaurants/"+restaurant.info.id}> 
               {
                 restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard  resData={restaurant} />)
               }
               </Link>              
            ))}
            
         

        </div>
      </div>
    )
  }

//   let resList

  export default Body;