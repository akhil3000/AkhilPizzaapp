import React,{useContext} from 'react'
import { MenuList } from "../helpers/MenuList"; 
import MenuItem from '../Components/MenuItem';
import "../Styles/Menu.css";
import { PizzaContext } from '../Context/PizzaContext';
import {useState} from "react"; 

function filteredPizzas(searchText) {
  const data =MenuList.filter((menuItem) => {
    return menuItem.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  //console.log(data);
  //console.log(restaurantList);

  return data;
}
function Menu() {
  const { addToCart, cartItems } = useContext(PizzaContext);
  const[searchText,setSearchText]=useState("");
  const[pizzaItem,setPizzaItem]=useState(MenuList);   
  return (
    <>
    <div className="menu">
    <div className="hello">
       <div className="hello1">
       <h1 className="menuTitle">Our Menu</h1>
       </div>
       <div className="search-container">
        <form className  action="" onSubmit={(e) => e.preventDefault()}>
          
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={() => {
              const data = filteredPizzas(searchText);
              setPizzaItem(data);
            }}
          >
            Search
          </button>
          </form>
          </div>
        
        </div>
       <div className="menuList">
         {pizzaItem.map((menuItem,key)=>{
            return <MenuItem 
            key={key}
            id={menuItem.id}
            image={menuItem.image}
             name={menuItem.name}
              price={menuItem.price}

              
        />; 
         }
         )}  
       </div>
    </div>
    </>
  )
}

export default Menu; 