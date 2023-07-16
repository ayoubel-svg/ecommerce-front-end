import React from "react";
import "../styles/Nav.css"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = (props) => {
    const { color } = props
    return (
        <nav className="navBar">
            <div className='logo'>
                <Link to="/" style={{ color: color || "white" }}>AStore</Link>
            </div>
            <div className="menu">
                <Link to="/" style={{ color: color || "white" }}>Home</Link>
                <Link to="/store" style={{ color: color || "white" }}>Store</Link>
                <Link to="/about" style={{ color: "#586A8C" }}>About</Link>
                <Link to="/contact" style={{ color: "#586A8C" }}>Contact</Link>
            </div>
            <div className="authentification">
                <Link to="/login" className="login">Login</Link>
                <Link to="/register" className="signUp">Register</Link>
                <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "#d9a171", color: "#fff", width: "15px", height: "15px", fontSize: ".7em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>0</span>
                    <LocalGroceryStoreIcon style={{ color: "#586A8C", fontSize: "2em" }} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
