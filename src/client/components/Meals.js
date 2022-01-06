import React from "react";
import "./Meals.css";
import { Link } from "react-router-dom";
function Meals({ meals, getMealPicture, getMealText }) {
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
                <li
                  style={{
                    color: "#ce8884",
                    backgroundColor: "#fdf8e8",
                    width: "100px",
                    paddingBottom: "20px",
                    marginLeft: "140px",
                  }}
                >
                  {item.title}
                </li>
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                  src={getMealPicture(item.id)}
                  style={{
                    height: "40%",
                    width: "40%",
                    marginBottom: "50px",
                  }}
                ></img>

                <div style={{ width: "30%", padding: "10px" }}>
                  <p
                    style={{
                      backgroundColor: "#ce8884",
                      color: "#fdf8e8",
                      fontSize: "1.5em",
                    }}
                  >
                    {getMealText(item.id)}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Meals;
