import React, { useEffect, useState } from "react";
import "../styles/resetpassword.css"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [passwords, setPasswords] = useState({
        password: "",
        confirm_password: ""
    })
    const [status, setStatus] = useState(false)
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("token")

    useEffect(() => {
        //todo here after we make all the params into a single instance of URLSearchParams
        const searchParams = new URLSearchParams(location.search);
        //todo than here we access theme
        const userEmail = searchParams.get("user");
        const decodedEmail = decodeURIComponent(userEmail);
        setEmail(decodedEmail);
        const userToken = searchParams.get("token");
        const decodeToken = decodeURIComponent(userToken)
        setToken(decodeToken)
    }, [location.search]);
    function handleChange(e) {
        const { name, value } = e.target
        setPasswords({ ...passwords, [name]: value })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (passwords.password === passwords.confirm_password) {
                const res = await axios.post("http://localhost:8000/api/reset-password", { email, password: passwords.password, token, password_confirmation: passwords.confirm_password })
                if (res.status === 200) {
                    setStatus(true)
                    setTimeout(() => {
                        navigate("/login")
                    }, 2000)
                }
            } else {
                alert("password needs to be the same")
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="reset-password-container">
            <div className="reset-container-box">
                <div className="reset-img-section">
                    <img src={"resetpassword.svg"} alt="" />
                </div>
                <div className="reset-content-inputs">
                    <h1>Reset <br /> Your Password</h1>
                    {status &&
                        <div className="reset-success">
                            Password have been changed successfully
                        </div>
                    }
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={passwords.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                value={passwords.confirm_password}
                                onChange={handleChange}
                            />
                        </div>
                        <button>Change</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
