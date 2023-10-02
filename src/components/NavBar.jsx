import React, { useEffect, useState } from "react";
import "../styles/Nav.css"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';
import { AnimatePresence, motion } from "framer-motion";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { TokenOutlined } from "@mui/icons-material";
const profileVariants = {
    initial: {
        x: "100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            type: "tween",
        }
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: {
            duration: 0.4,
            type: "tween",
        },
    }
}
const NavBar = (props) => {
    const { color } = props
    const [user, setUser] = useState({})
    const [profile, setProfile] = useState(false)
    const token = sessionStorage.getItem("token")
    const id = sessionStorage.getItem("id")
    const navigate = useNavigate()
    const { pathname } = useLocation()
    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get(`http://localhost:8000/api/admin/${id}`, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(res.data.data)
                } catch (err) {
                    console.log(err)
                }
            }
            getUser()
        }
    }, [token])
    const handleProfileClick = () => {
        setProfile(!profile)
    }
    useEffect(() => {
        document.body.classList.toggle("active", profile)
    }, [profile])
    function handleLogout() {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("role");
        setTimeout(() => {
            navigate("/")
        }, 100)
    }
    return (
        <nav className="navBar" style={{ display: pathname === "/login" || pathname === "/register" || pathname === "/forget-password" || pathname === "/reset-password" ? "none" : "" }}>
            <div className='logo'>
                <Link to="/" style={{ color: "black" }}>AStore</Link>
            </div>
            <div className="menu">
                <Link to="/" style={{ color: "black" }}>Home</Link>
                <Link to="/store" style={{ color: "black" }}>Store</Link>
                <Link to="/about" style={{ color: "black" }}>About</Link>
                <Link to="/contact" style={{ color: "black" }}>Contact</Link>
            </div>
            <div className="authentification">
                <Link to="/login" className="login" style={{ display: token ? "none" : "" }}>Login</Link>
                <Link to="/register" className="signUp" style={{ display: token ? "none" : "" }}>Register</Link>
                <div className="shopping-cart" style={{ position: "relative" }}>
                    <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "#4aca4a", color: "#fff", width: "15px", height: "15px", fontSize: ".7em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", }}>0</span>
                    <LocalGroceryStoreIcon style={{ color: "#000", fontSize: "2em" }} />
                </div>
                <div className="profile-avatar" style={{ display: token ? "" : "none" }}>
                    <img src={`/${pathname}/user.png`} alt="pic" onClick={handleProfileClick} />
                </div>
                <AnimatePresence>
                    {user && profile && <motion.div className="profile-select"
                        style={{ display: profile ? "block" : "none" }} onClick={handleProfileClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <motion.div
                            key={profile ? "profile-select" : "profile-select-hidden"}
                            className="select-option"
                            variants={profileVariants}
                            initial="initial"
                            animate={profile ? "visible" : "hidden"}
                            exit="exit"
                        >
                            <div className="head">
                                <div className="title">
                                    <img src={"/user.png"} alt="pic" />
                                    <span>{user.username}</span>
                                </div>
                                <div className="close">
                                    <button onClick={() => setProfile(false)}>
                                        <CloseIcon className="close-btn" />
                                    </button>
                                </div>
                            </div>
                            <div className="body">
                                <div className="top-body">
                                    <hr />
                                    <div className="profile-section">
                                        <PersonIcon className="profile-icon" />
                                        <span>
                                            <Link to={`/profile/${id}`}>
                                                Your Profile
                                            </Link>
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="setting-section">
                                        <SettingsIcon className="setting-icon" />
                                        <span>Settings</span>
                                    </div>
                                    <hr />
                                </div>
                                <Link onClick={handleLogout}>
                                    <div className="bottom-body logout">
                                        <LogoutIcon className="logout-icon" />
                                        <span>Logout</span>

                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                    }
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default NavBar;
