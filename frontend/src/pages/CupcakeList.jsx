import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeList() {
  // Step 1: get all cupcakes

  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/cupcakes")
      .then((response) => response.data)
      .then((data) => setCupcakes(data));
  }, []);

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/accessories")
      .then((response) => response.data)
      .then((data) => setAccessories(data));
  }, []);

  const [selectedAccessory, setSelectedAccessory] = useState("");

  const handleChangeSelectedAccessory = (e) => {
    e.preventDefault();
    setSelectedAccessory(e.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChangeSelectedAccessory}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories &&
              accessories.map((accessorie) => (
                <option value={accessorie.id} key={` key + ${accessorie.id}`}>
                  {accessorie.name}
                </option>
              ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}

        {cupcakes &&
          cupcakes
            .filter(
              (cupcake) =>
                !selectedAccessory || cupcake.accessory_id === selectedAccessory
            )
            .map((cupcake) => (
              <li className="cupcake-item">
                <Link to={`/cupcakes/${cupcake.id}`}>
                  <Cupcake cupcake={cupcake} key={cupcake.id} />
                </Link>
              </li>
            ))}

        {/* end of block */}
      </ul>
    </>
  );
}
