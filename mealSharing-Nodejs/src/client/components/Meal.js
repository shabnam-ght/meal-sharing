import React from "react";
import { useParams } from 'react-router-dom';
function Meal({getMeal}){
  let params = useParams();
  let meal = getMeal(params.id);
return(
    <div>
        <p>{meal.title}</p>
        <p>{meal.description}</p>
        <button onClick={console.log(meal)}>ggggggggg</button>
    </div>
);
}

export default Meal;