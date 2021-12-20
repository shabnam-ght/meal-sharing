import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import {useState,useEffect} from "react";
import Meal from "./components/Meal";
import Meals from "./components/Meals";
import Reservations from "./components/TestComponent/Reservations";
const api_url="http://localhost:5000/api";

function App() {
  const [meals,setMeals]=useState([]);
  useEffect(()=>{
    async function getMeals(){
      const url=`${api_url}/meals`;
      const response=await fetch(url);
      const data=await response.json();
      setMeals(data);
    }
    getMeals();
  },[])


  const [reservation,setReservation]=useState([]);
  useEffect(()=>{
    async function getReservation(){
      const url=`${api_url}/reservations`;
      const response=await fetch(url);
      const data=await response.json();
      setReservation(data);
    }
    getReservation();
  },[])

  
  return (
    
      <Switch>
        
        <Route exact path="/" >
          <Meals meals={meals}/>
        </Route>
        <Route exact path="/meal/:id">
          <Meal/>
        </Route>
      </Switch>

  );
}

export default App;
