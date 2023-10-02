import React, { useEffect, useState } from "react";
import "../styles/profile.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import UploadIcon from '@mui/icons-material/Upload';
import { AnimatePresence, motion } from "framer-motion"
import Alert from "./Alert";
const Profile = () => {
    const { id } = useParams()
    const [userInfo, setUserInfo] = useState({
        username: "",
        image: "",
        email: "",
        password: ""
    })
    const [errorFound, setErrorFound] = useState(false)
    const token = sessionStorage.getItem("token")
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/admin/${id}`, {
                    headers: {
                        Accept: "application/vnd.api+json",
                        "Authorization": `Bearer ${token}`,
                    }
                })

                setUserInfo({ ...userInfo, username: res.data.data.username, email: res.data.data.email, image: res.data.data.image })
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [id])
    function handleChanges(e) {
        const { value, name, files } = e.target;
        if (name === "image") {
            setUserInfo({ ...userInfo, image: files[0] })
        } else {
            setUserInfo({ ...userInfo, [name]: value })
        }
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append("username", userInfo.username);
            formData.append("email", userInfo.email);
            formData.append("password", userInfo.password);
            formData.append("image", userInfo.image);

            const res = await axios.put(`http://localhost:8000/api/admin/${id}`, formData, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="profile-container">
            <AnimatePresence>
                {errorFound && <Alert
                    message="You have to fill the password"
                    setErrorFound={setErrorFound}
                />
                }
            </AnimatePresence>
            <div className="head-profile"></div>
            <div className="user-info">
                <div className="head-info">
                    <img src={"/user.png"} alt="pic" />
                    <div className="upload-btn">
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleChanges} />
                        <label htmlFor="image">
                            <UploadIcon />
                            UPLOAD FILE
                        </label>
                    </div>

                </div>
                <div className="body-info">
                    <form onSubmit={handleSubmit}>
                        <div className="username-box-profile">
                            <span>Your Username</span>
                            <div>
                                <input type="text" name="username" id="username" value={userInfo.username} placeholder="Username" onChange={handleChanges} />
                                <motion.label htmlFor="username"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >Edit</motion.label>
                            </div>
                        </div>
                        <div className="email-box-profile">
                            <span>Your Email</span>
                            <div>
                                <input type="email" name="email" id="email" value={userInfo.email} placeholder="Email" onChange={handleChanges} />
                                <motion.label htmlFor="email"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >Edit</motion.label>
                            </div>
                        </div>
                        <div className="password-box-profile">
                            <span>Change Password</span>
                            <div>
                                <input type="password" name="password" id="password" value={userInfo.password} placeholder="Confirm Your Password Or enter the new one" onChange={handleChanges} />
                                <motion.label htmlFor="password"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >Edit</motion.label>
                            </div>
                            <span>
                                password needs to have big letters,small letters ,special characters <br /> and numbers
                            </span>
                        </div>
                        <div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >Save Changes</motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default Profile;
