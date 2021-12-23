import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState,useEffect} from "react";
import Meal from "./components/Meal";
import Meals from "./components/Meals";



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
    setReservation(newList);
  }
  return (
    <>
      <Switch>
        <Route exact path="/" >
          <Meals meals={meals} />
        </Route>
        <Route exact path="/meal/:id">
          <Meal oneMeal={getMeal} updateReservation={updateLocalReservationState} allReservations={reservation}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
