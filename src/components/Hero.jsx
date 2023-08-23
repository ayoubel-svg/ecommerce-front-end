import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png"
import { Link } from "react-router-dom";
import "../styles/hero.css"
import axios from "axios";
import Card from "./Card";
import { motion } from "framer-motion";
const Hero = () => {
    const [products, setProducts] = useState([])
    const token = sessionStorage.getItem("token")
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/product", {
                    headers: {
                        Accept: "application/json",
                    }
                })
                setProducts(res.data.data)
                // console.log(res.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
        // console.log(products)
    }, [])
    // if (products.length === 0) return "loading ..."
    return (
        <div>
            <div style={{ width: "100%", minHeight: "100vh" }} className="hero-container">
                <div className="hero-typography">
                    <h1>Discover endless delights at our store .</h1>
                    <Link>
                        <motion.button
                            className="btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Start Shopping</motion.button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="pic" />
                </div>
            </div>
            <div style={{ width: "100%", minHeight: "100vh", padding: "3em", display: "flex", flexDirection: "column", rowGap: "3em" }}>
                <div className="product-header">
                    <h1>Featured Product</h1>
                    <div>
                        <span>All</span>
                        <span>Best sellers</span>
                        <span>Most rated</span>
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    <div style={{ width: "80%", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "4em", float: "right" }}>
                        {products.map((product, i) => {
                            return <Card
                                key={i}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                description={product.description}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;
