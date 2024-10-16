import { CDN_URL } from "../utils/constants";



// let resList=[{
//     type:"restaurant",
//     data: {
//         id:"4356",
//         name:"Happy Kitchen",
//         cuisines:['Indian','Burger','Chaap'],
//         costForTwo: 40000,
//         rating:4.4
//     }
// },{
//     type:"restaurant",
    
//     data: {
//         id:"1356",
//         name:"Kitchen King",
//         cuisines:['Indian','Burger','Chaap'],
//         costForTwo: 40000,
//         rating:4.4
//     }
// },
//    {
//     type:"restaurant",
   
//     data: {
//         id:"2356",
//         name:"KfC",
//         cuisines:['Indian','Burger','Chaap'],
//         costForTwo: 40000,
//         rating:4.4
//     }
// },
//   {
//     type:"restaurant",

//     data: {
//         id:"5356",
//         name:"Domino's",
//         cuisines:['Indian','Burger','Chaap'],
//         costForTwo: 40000,
//         rating:4.4
//     }
// },
//    {

//     type:"restaurant",
//     data: {
//         id:"7356",
//         name:"Veer Ji Malai Chaap",
//         cuisines:['Indian','Burger','Chaap'],
//         costForTwo: 40000,
//         rating:4.4
//     }
// }

// ]

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
      <div className="res-card">
        <img 
        className="res-logo" 
        alt="res-logo"
        src={CDN_URL+  cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  };

  export default RestaurantCard;