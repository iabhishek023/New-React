//it should fetch the data but due to some reason i don't know it maybe cors issue it is not working so shifting this code
//again to RestaurantMenu


import { useEffect,useState } from "react";
import { MENU_URL } from "../utils/constants";


const useRestaurantMenu = (resId)=>{
    //fetchdata
    const [resInfo,setResInfo]=useState(null);

    useEffect=(() =>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data= await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66500&lng=77.44770&restaurantId="+resId);
        const json=await data.json();

        setResInfo(json.data);
        console.log(json);
    }
    console.log(resInfo)
    return resInfo;
}

export default useRestaurantMenu;