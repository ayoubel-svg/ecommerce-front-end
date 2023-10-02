import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSneakers } from "../data/fetchSneakers";
import Card from "./Card";
import "../styles/store.css";
import { CircularProgress } from "@mui/material";
import { fetchCloths } from "../data/fecthSlice";
import axios from "axios";
import CardSkeleton from "./CardSkeleton";
const MyStore = () => {
  const [values, setValues] = useState({
    search: "",
    category: "shoes",
  });
  const [products, setProdducts] = useState([])
  const token = sessionStorage.getItem("token")

  useEffect(() => {
    const getPoducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/product", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });
        setProdducts(res.data.data);
      } catch (err) {
        console.log(err)
      }
    }
    getPoducts();
  }, [token])

  return (
    <div className="mystore">
      <div className="search-section">

      </div>
      <div className="store">
        {products.length === 0 && <CardSkeleton cards={9} />}
        {products.map((ele, i) => {
          return <Card key={i} {...ele} />;
        })}
      </div>
    </div>
  );
};

export default MyStore;
