import React,{useContext} from "react";
import { PizzaContext } from "../../Context/PizzaContext"; 

export const CartItem = (props) => {
  const{id,name,image,price}=props.data;
  const{cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(PizzaContext);

  return (
    <div className="cartItem">
       <img className="imageratio" src={image}/>
       <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p>Price:${price}</p>
          <div className="countHandler">
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]}
            onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}
            />
           <button onClick={()=>addToCart(id)}>+</button>


          </div>
        </div> 

    </div>
  )
}
