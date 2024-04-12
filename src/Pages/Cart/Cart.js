import React,{useContext} from "react";
import { PizzaContext } from "../../Context/PizzaContext";
import MenuItem from "../../Components/MenuItem";
import { MenuList } from "../../helpers/MenuList";
import { CartItem } from "./CartItem";
import {useNavigate} from "react-router-dom";
import "./Cart.css";

function Cart() {
  const{cartItems,getTotalCartAmount,checkout}=useContext(PizzaContext);
  const totalAmount=getTotalCartAmount();
  const navigate=useNavigate();

  return (
    <div className="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
        {MenuList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}

        {totalAmount>0? (
             <div className="checkout">
             <p> Subtotal: ${totalAmount} </p>
             <button onClick={() => navigate("/menu")}> Continue Ordering </button>
             <button
               onClick={() => {
                 checkout();
                 navigate("/checkout");
               }}
             >
               {" "}
               Checkout{" "}
             </button>
           </div>
         ) : (
           <h1> Your Shopping Cart is Empty</h1>
           
        )}

        </div>



    </div>
  )
}

export default Cart