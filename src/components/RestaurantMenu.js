import {useEffect,useState} from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
    const[resInfo,setResInfo]=useState(null);

     const{resId}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async()=>{
        const data= await fetch(MENU_URL+resId);
        const json= await data.json();
        // console.log (json);

        setResInfo(json.data);
    }

    if(resInfo===null) return <Shimmer/>
    const{name,city,costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(resInfo?.cards[4]?.
        groupedCard?.cardGroupMap?.REGULAR?.cards)

        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
              c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );

    console.log(categories);


    

   
    return(
        <div className="menu text-center">
            <h1 className="font-bold  my-6 text-2xl">{name }</h1>
            <p className="font-bold"> {city}--{costForTwoMessage}</p>
            <p className="font-bold">{cuisines.join(", ")}</p>

            {
                categories.map((category)=>(
                <RestaurantCategory key={category.card.card.title} data={category?.card?.card}/>
                ))
            }


            {/* <ul>
                {itemCards.map((item)=>(
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name}--Rs.{item?.card?.info?.price/100}
                    </li>
                ))}
                
            </ul> */}

        </div>
    )
}

export default RestaurantMenu;