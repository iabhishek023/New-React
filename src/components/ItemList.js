import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }

    console.log(items);
    return(
        <div>
             {items.map((item)=>(<div key={item.card.info.id}  className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                 
                 <div className="w-9/12">
                 <div className="py-2 ">
                     <span className="font-bold">{item.card.info.name}</span>
                     <span className="font-semibold"> - Rs {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                 </div>
                 <p className="text-xs">{item.card.info.description}</p>
                 </div>
                 <div className="w-3/12">
                     <div className="absolute">
                   <button className="align-text-bottom bg-green-400 shadow-lg mx-14 relative border border-dark-500 rounded-lg "
                      onClick={()=>handleAddItem(item)}>Add +</button>
                      </div>
                      <img src={CDN_URL+item.card.info.imageId} className="w-32 p-4"/>
                 </div>
                

             </div>
             ))}
        </div>

    )
}
export default ItemList;