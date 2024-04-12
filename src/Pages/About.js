import React from "react";
import MultiplePizzas from "../Assets/multiplePizzas.jpeg";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <ul class="hello"> 
         <li>Akhil's Pizeeria is Leading Restaurant since Couple of Decades ago</li>
         <li>It serves so many types of healthy fastfood </li> 
         <li>Pizza is one of the special dish of this restaurant at affordable prices</li> 
        <li>And customers are given much more priority it will have good environment</li>
        <li>Nowadays you can order food from Swiggy and Zomato as well please visit us</li>
        </ul>
        
      </div>
    </div>
  );
}

export default About;