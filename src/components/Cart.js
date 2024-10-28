import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart =() =>{
    const cartItems=useSelector((store)=>store.cart.items);

       
    const dispatch = useDispatch();

    const handleClearCart=() =>{
        dispatch(clearCart());
    }


    return (
        <div className="text-center m-5 p-5">
            <h1 className="m-2 p-2 font-bold"> Cart</h1>
            <div className="w-6/12 m-auto ">
            <button className="p-2 m-2 bg-black text-white rounded-xl" onClick={handleClearCart}>
                 Clear Cart
            </button>
                <ItemList items={cartItems}/>
            </div>
        </div>

    )
}

export default Cart;