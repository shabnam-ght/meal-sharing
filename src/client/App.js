import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Meal from "./components/Meal";
import Meals from "./components/Meals";
import "./components/Meals.css";
import { map, size } from "lodash";
import Footer from "./components/Footer";

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
    "https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg",
  ],
]);
const textOfPictures = new Map([
  [
    5,
    "Tahchin is an Iranian rice cake primarily consisting of rice, yogurt, saffron, and eggs. Some versions of the dish are more elaborate, folding in chicken fillets, vegetables, fish, or red meat. Tahchin is composed of two different parts: the thin Tahdig part which includes the chicken fillets, saffron, and other ingredients at the bottom of the cooking pot and the second part which is the white rice. In restaurants, tahchin is mostly prepared and served without the white rice part.",
  ],
  [
    15,
    'Soups made with cream and mushrooms are much older than the canned variety. Ancient Italian (Salsa colla) and French (Béchamel) cream sauces, and soups based on them have been made for many hundreds of years. In America, the Campbell Soup Company began producing its well-known "Cream of Mushroom Soup" in 1934, the same year that it introduced "Chicken with Noodles"',
  ],
  [
    25,
    "Pasta ) is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste and texture, or as a gluten-free alternative. Pasta is a staple food of Italian cuisine.",
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
  function getMealText(id) {
    return textOfPictures.get(id);
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
          backgroundColor: "#bed5ae",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
            left: "150px",

            // display: "flex",
            // flexWrap: "noWrap",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"
            alt="front image"
            style={{
              width: "80%",
              paddingTop: "50px",
            }}
          ></img>

          <p
            style={{
              color: "#fdf8e8",
              backgroundColor: "#ce8884",
              alignSelf: "center",
              fontSize: "50px",
              position: "absolute",
              top: "350px",
              left: "150px",
              opacity: "0.8 ",
            }}
          >
            TRY THE TASTE OF THE WORLD WITH US{" "}
          </p>
        </div>
        <Switch>
          <Route exact path="/">
            <Meals
              meals={meals}
              getMealPicture={getMealPicture}
              getMealText={getMealText}
            />
          </Route>
          <Route exact path="/meal/:id">
            <Meal
              oneMeal={getMeal}
              updateReservation={updateLocalReservationState}
              allReservations={reservation}
              getMealPicture={getMealPicture}
            />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
