import React, { useEffect, useState } from "react";
import "../styles/forgetpassword.css"
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
const ForgetPassword = () => {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)
    function handleChange(e) {
        const { value } = e.target
        setEmail(value)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (email !== "") {
            try {
                const res = await axios.post("http://localhost:8000/api/forgot-password", { email }, {
                    headers: {
                        Accept: "application/json"
                    }
                })
                if (res.status === 200) {
                    setError(false)
                    setStatus(true)
                    setEmail("")
                }

            } catch (err) {
                console.log(err)
                setError(true);
            }
        }
    }

    return (
        <div className="forget-password-container">
            <div className="forget-password-box">
                <div className="forget-password-head">
                    <img src={"Forgotpassword.svg"} alt="pass" />
                </div>
                <div className="forget-password-body">
                    <div className="head-body">
                        <h1>Forgot Password</h1>
                        <p>No worries will send you instruction for reset</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {status && <div className="email-send">we have emailed your password rest link</div>}
                        <div className="forget-password-email">
                            <label htmlFor="email">Email </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={email}
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Submit</motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
