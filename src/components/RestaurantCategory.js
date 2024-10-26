import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory=({data})=>{
    // console.log("op");
    // console.log(data);
    const [showItems,setShowItems]=useState(false)

    const handleClick=()=>{
        console.log("Clicked")
        setShowItems(!showItems);

    }
    return(
        <div>
            <div className="w-6/12 bg-gray-100 shadow-xl mx-auto my-2  ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
             
        </div>
    )
}

export default RestaurantCategory;