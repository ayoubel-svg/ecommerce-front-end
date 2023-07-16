import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSneakers } from "../data/fetchSneakers";
import Card from "./Card";
import "../styles/store.css";
import { CircularProgress } from "@mui/material";
import { fetchCloths } from "../data/fecthSlice";
const MyStore = () => {
  const [values, setValues] = useState({
    search: "",
    category: "shoes",
  });
  const [products, setProducts] = useState([]);
  const data1 = useSelector((state) => state.sneakers.data);
  const data4 = useSelector((state) => state.fetch.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSneakers());
    dispatch(fetchCloths());
  }, []);
  useEffect(() => {
    if (values.category === "shoes") {
      setProducts(data1);
    } else if (values.category === "clothes") {
      setProducts(data4);
    }
  }, [values]);
  useEffect(() => {
    if (values.category === "shoes") {
      setProducts((prev) => {
        return prev.filter((item) => item.title.includes(values.search));
      });
    } else if (values.category === "clothes") {
      setProducts((prev) => {
        return prev.filter((item) => item.title.includes(values.search));
      });
    }
  }, [values.search]);
  function handleChnage(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
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
        <input
          type="text"
          className="search-item"
          placeholder="Search for items ..."
          onChange={handleChnage}
          name="search"
        />
        <select name="category" id="category" onChange={handleChnage}>
          <option selected value="shoes">
            Shoes
          </option>
          <option value="clothes">clothes</option>
        </select>
      </div>
      <div className="store">
        {products.slice(0, 40).map((ele, i) => {
          return <Card key={i} {...ele} />;
        })}
      </div>
    </div>
  );
};

export default MyStore;
