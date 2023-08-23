import React, { useEffect, useState } from "react";
import "../styles/Nav.css"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';
import { AnimatePresence, motion } from "framer-motion";
import SettingsIcon from '@mui/icons-material/Settings';
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
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(false)
    const token = sessionStorage.getItem("token")
    const id = sessionStorage.getItem("id")
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/admin/${id}`, {
                    headers: {
                        Accept: "application/json",
                    }
                })
                setUser(res.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [])
    const handleProfileClick = () => {
        setProfile(!profile)
    }
    useEffect(() => {
        document.body.classList.toggle("active", profile)
    }, [profile])
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
                <Link to="/login" className="login" style={{ display: token ? "none" : "" }}>Login</Link>
                <Link to="/register" className="signUp" style={{ display: token ? "none" : "" }}>Register</Link>
                <div className="shopping-cart" style={{ position: "relative" }}>
                    <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "#d9a171", color: "#fff", width: "15px", height: "15px", fontSize: ".7em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", }}>0</span>
                    <LocalGroceryStoreIcon style={{ color: "#586A8C", fontSize: "2em" }} />
                </div>
                <div className="profile-avatar" style={{ display: token ? "" : "none" }}>
                    <img src={"user.png"} alt="pic" onClick={handleProfileClick} />
                </div>
                <motion.div className="profile-select"
                    style={{ display: profile ? "block" : "none" }} onClick={handleProfileClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >

                    {user && <AnimatePresence> {profile && (<motion.div
                        key={profile ? "profile-select" : "profile-select-hidden"}
                        className="select-option"
                        variants={profileVariants}
                        initial="initial"
                        animate={profile ? "visible" : "hidden"}
                        exit="exit"
                    >
                        <div className="head">
                            <div className="title">
                                <img src={"user.png"} alt="pic" />
                                <span>{user.username}</span>
                            </div>
                            <div className="close">
                                <button onClick={() => setProfile(false)}>
                                    <CloseIcon className="close-btn" />
                                </button>
                            </div>
                        </div>
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
                    </motion.div>)}
                    </AnimatePresence>
                    }

                </motion.div>
            </div>
        </nav>
    );
};

export default NavBar;
