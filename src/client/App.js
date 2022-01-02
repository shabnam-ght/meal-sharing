import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Meal from "./components/Meal";
import Meals from "./components/Meals";
import "./components/Meals.css";

const api_url = "/api";
const pictures = new Map([
  [
    5,
    "https://www.foodche.com/wp-content/uploads/2020/09/tahchin-morgh-1080x650.jpg",
  ],
  [
    15,
    "https://www.recipetineats.com/wp-content/uploads/2021/04/Mushroom-Soup-in-bowl-SQ.jpg",
  ],
  [
    25,
    "https://thefoodcharlatan.com/wp-content/uploads/2020/08/Homemade-Chicken-Fettuccine-Alfredo-10.jpg",
  ],
]);

function App() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function getMeals() {
      const url = `${api_url}/meals`;
      const response = await fetch(url);
      const data = await response.json();
      setMeals(data);
    }
    getMeals();
  }, []);
  function getMealPicture(id) {
    return pictures.get(id);
  }
  function getMeal(id) {
    return meals.find((meal) => meal.id === id);
  }

  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    async function getReservation() {
      const url = `${api_url}/reservations`;
      const response = await fetch(url);
      const data = await response.json();
      setReservation(data);
    }
    getReservation();
  }, []);

  function updateLocalReservationState(newReservation) {
    const newList = [...reservation];
    newList.push(newReservation);
    setReservation(newList);
  }
  return (
    <>
      <Header></Header>
      <div
        style={{
          fontFamily: "Ubuntu, sans-serif",
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"
          alt="front image"
          style={{
            display: "block",
            width: "50%",
          }}
        ></img>

        <Switch>
          <Route exact path="/">
            <Meals meals={meals} getMealPicture={getMealPicture} />
          </Route>
          <Route exact path="/meal/:id">
            <Meal
              oneMeal={getMeal}
              updateReservation={updateLocalReservationState}
              allReservations={reservation}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
