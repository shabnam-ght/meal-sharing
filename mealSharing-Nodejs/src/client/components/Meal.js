import React from "react";
import {useState,useEffect} from "react"

//const meal_id=this.props.match.params.id;

const api_url="http://localhost:5000/api";

export default function Meal(){
    const [meal,setMeal]=useState([]);
    
  useEffect(()=>{
    async function getMeal(){
      const url=`${api_url}/meals/2`;
      const response=await fetch(url);
      const data=await response.json();
      setMeal(data[0]);
    }
    getMeal();
  },[])
return(
    <div>
        <p>test</p>
        <p>{meal.title}</p>
    </div>
);
}