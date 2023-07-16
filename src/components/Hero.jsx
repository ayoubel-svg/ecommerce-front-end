import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png"
import { Link } from "react-router-dom";
import "../styles/hero.css"
const Hero = () => {
    return (
        <div style={{ width: "100%", minHeight: "100vh" }} className="hero-container">
            <div className="hero-typography">
                <h1>Discover endless delights at our store .</h1>
                <Link className="btn">Start Shopping</Link>
            </div>
            <div className="hero-image">
                <img src={hero} alt="pic" />
            </div>
        </div>
    )
};

export default Hero;
