import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import {useState,useEffect} from "react";
import Meal from "./components/Meal";
import Meals from "./components/Meals";
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

  return (
    <Router>
      <Route exact path="/">
       <Meals meals={meals}></Meals>
      </Route>
      <Route path="/meals/:id">
        <Meal></Meal>
        
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
