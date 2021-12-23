import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import {useState,useEffect} from "react";
import Meal from "./components/Meal";
import Meals from "./components/Meals";
import Reservations from "./components/TestComponent/Reservations";
const api_url="/api";

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


  function getMeal(id) {
    return meals.find((meal) => meal.id === id);
  }

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

  function updateLocalReservationState(newReservation) {
    const newList = [...reservation];
    newList.push(newReservation);
    setReservartion(newList);
  }
  return (
    
      <Switch>
        
        <Route exact path="/" >
          <Meals meals={meals}/>
        </Route>
        <Route exact path="/meal/:id">
          <Meal oneMeal={getMeal} updateReservation={updateLocalReservationState}/>
        </Route>
      </Switch>

  );
}

export default App;
