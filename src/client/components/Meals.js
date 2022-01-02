import React from "react";
import "./Meals.css";
import { Link } from "react-router-dom";
function Meals({ meals, getMealPicture }) {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        {meals.map((item) => {
          return (
            <>
              <Link
                to={{ pathname: `/meal/${item.id}` }}
                style={{
                  textDecoration: "none",
                  fontFamily: "Ubuntu, sans-serif",
                  fontSize: "20px",
                }}
              >
                <li style={{ color: "white" }}>{item.title}</li>
              </Link>
              <img src={getMealPicture(item.id)}></img>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Meals;
