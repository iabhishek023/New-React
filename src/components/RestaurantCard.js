import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;

    const{
        
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,

    }=resData?.info
    return(
      <div className="m-4 p-4 w-64 res-card bg-gray-100 border border-gray-300 rounded-lg 
      transform transition-transform duration-300 hover:scale-105 hover:bg-gray-300" >
        <img 
        className="res-logo rounded-xl" 
        alt="res-logo"
        src={CDN_URL+  cloudinaryImageId}
        />
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  };

  export default RestaurantCard;