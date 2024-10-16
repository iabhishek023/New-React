import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
// import { resList } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [listOfRest,setListOfRest]=useState([]);
    const [filteredRest,setFilteredRest]=useState([]);

    const [searchText,setSearchText]=useState("");

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async()=>{
      const data= await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

      const json=await data.json();

      console.log(json);

      //Option Chaining
      setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //Conditional Rendering
  
 
  

    return listOfRest.length===0?<Shimmer/>:(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" 
               className="search-box"
               value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
               }}
               />
            <button 
            onClick={()=>{
               console.log(searchText);

               const filteredRest= listOfRest.filter(
                 (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
               );

               setFilteredRest(filteredRest)
            }}>Search</button>
            
          </div>
            <button 
               className="filter-btn"
               onClick={()=>{
                   const filteredList=listOfRest.filter(
                       (res)=>res.info.avgRating>=4.5
                    );

                       //console.log(resList); 
                       setListOfRest(filteredList);                      
                    }
            }
            >Top rated Restaurant</button>
        </div>
        <div className="res-container">
            {filteredRest.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
            
          {/* <RestaurantCard resData={resList[0]}/>
          <RestaurantCard resData={resList[1]}/>
          <RestaurantCard resData={resList[2]}/>
          <RestaurantCard resData={resList[3]}/>
          <RestaurantCard resData={resList[4]}/> */}

        </div>
      </div>
    )
  }

//   let resList

  export default Body;