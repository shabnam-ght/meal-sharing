import React from "react";
import Meal from "./Meal"
import { Link } from 'react-router-dom';
function Meals({meals}){
  
return(
    <div>
    <ul>{meals.map((item)=>{
        return (
          <Link  to={{ pathname: `/meal/${item.id}`}}>
          <li>{item.title}</li>

          </Link>
        );
      })}</ul>
      </div>
);
}

export default Meals;