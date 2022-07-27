import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cupcakes/${id}`)
      .then((response) => response.data)
      .then((data) => setDetails(data));
  }, []);

  return <Cupcake cupcake={details} />;
}
