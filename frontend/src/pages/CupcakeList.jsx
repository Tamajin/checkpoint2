import React, {useState, useEffect} from "react";
import Cupcake from "@components/Cupcake";
import axios from "axios";

export default function CupcakeList() {
  // Step 1: get all cupcakes

  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:4000/cupcakes")
    .then(response => response.data)
    .then(data => setCupcakes(data))
  }, []);


  // Step 3: get all accessories

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes && cupcakes
        .map((cupcake)=> <Cupcake cupcake={cupcake}/>)}
        <li className="cupcake-item">
          
        </li>
        {/* end of block */} 
      </ul>
    </>
  );
}
