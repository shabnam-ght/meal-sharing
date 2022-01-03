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
                <li style={{ color: "ce8884" }}>{item.title}</li>
              </Link>
              <img
                src={getMealPicture(item.id)}
                style={{
                  height: "40%",
                  width: "40%",
                }}
              ></img>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Meals;
