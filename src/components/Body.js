import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import { resList } from "../utils/constants";

const Body=()=>{

    const [listOfRest,setListOfRest]=useState(resList)

    return(
      <div className="body">
        <div className="filter">
            <button 
               className="filter-btn"
               onClick={()=>{
                   const filteredList=listOfRest.filter(
                       (res)=>res.data.rating>4.5
                    );

                       //console.log(resList); 
                       setListOfRest(filteredList);                      
                    }
            }
            >Top rated Restaurant</button>
        </div>
        <div className="res-container">
            {listOfRest.map((restaurant)=>(
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
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