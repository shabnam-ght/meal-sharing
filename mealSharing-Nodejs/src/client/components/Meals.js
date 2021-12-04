import React from "react";

export default function Meals({meals}){
  
return(
    <div>
    <ul>{Meals.map((item)=>{
        return (

          <li>{item.title}</li>
        );
      })}</ul>
      </div>
);
}