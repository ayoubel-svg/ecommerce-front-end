import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSneakers } from "../data/fetchSneakers";
import Card from "./Card";
import "../styles/store.css";
import { CircularProgress } from "@mui/material";
import { fetchCloths } from "../data/fecthSlice";
import axios from "axios";
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
        console.log(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPoducts();
  }, [token])
  if (products.length === 0)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  return (
    <div className="mystore">
      <div className="search-section">

      </div>
      <div className="store">
        {products.map((ele, i) => {
          return <Card key={i} {...ele} />;
        })}
      </div>
    </div>
  );
};

export default MyStore;
