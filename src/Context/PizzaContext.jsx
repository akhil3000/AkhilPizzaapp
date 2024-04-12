import {createContext,useEffect,useState} from "react";
import { MenuList } from "../helpers/MenuList";

export const PizzaContext=createContext(null);

const getDefaultCart = () =>{
    let cart={};
    for(let i=1;i<MenuList.length+1;i++)
    {
        cart[i]=0;
    }
    return cart;
}

export const PizzaContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());

     const getTotalCartAmount = () =>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=MenuList.find((product)=>product.id === Number(item));
                totalAmount+=cartItems[item]*itemInfo.price;
            }
        }
        return totalAmount;
     }

     const addToCart=(itemId) =>{
        debugger
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
     }

     const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
     }

     const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
     }

     const checkout = () => {
        setCartItems(getDefaultCart());
      };
    
      const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
      };
    
      return (
        <PizzaContext.Provider value={contextValue}>
          {props.children}
        </PizzaContext.Provider>
      );



}