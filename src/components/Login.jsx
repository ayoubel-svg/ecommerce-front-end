import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login-page.css"
import login from "../assets/login.svg";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import google from "../assets/google.png"
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loginUrl, setLoginUrl] = useState(null);

  useEffect(async () => {
    // Fetch the authentication URL from the API.
    const authResponse = await fetch('http://localhost:8000/api/auth', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    // Check the status code of the response.
    if (!authResponse.ok) {
      // Throw an error if the response is not successful.
      throw new Error('Something went wrong!');
    }

    // Parse the response as JSON.
    const data = await authResponse.json();

    // Set the login URL state.
    setLoginUrl(data.url);
  }, []);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();
  const users = useSelector((state) => state.login.users);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const notify = () =>
    toast.success("logged in with success", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const wrong = () =>
    toast.error("incorrect email or password", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  async function handleSubmit(e) {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    if (token) {
      navigate('/');
      return;
    }
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", values, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      sessionStorage.setItem("token", res.data.data.token)
      sessionStorage.setItem("id", res.data.data.user.id)
      sessionStorage.setItem("role", res.data.data.user.role)
      navigate("/")
    } catch (err) {
      console.log(`Error is ${err.message}`);
      setIsCorrect(true)
    }
  }
  useEffect(() => {
    // Check if the user is already logged in.
    const token = sessionStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, []);

  return (
    <div className="main-login-container">
      <div className="login-page">
        <div className="login-container">
          <h2 style={{ color: "#fff" }}>
            Log in to your account
          </h2>
          <div className="to-signup">
            Don't have an account? <Link to="/register" className="to-register">Sign Up</Link>
          </div>
          <div style={{ width: "100%" }}>
            <GoogleOAuthProvider
              clientId="client_id">
              <GoogleAuth />
            </GoogleOAuthProvider>
          </div>
          <div style={{ color: "white", fontSize: "12px" }}>
            Or with email and password
          </div>
          <form className="login-form" onSubmit={handleSubmit} method="post">
            <div style={{ display: isCorrect ? "" : "none", color: "red" }}>
              Invalid Email Ou Password
            </div>
            <div className="email-box">
              <label htmlFor="email" style={{ color: "#fff" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="pass-box" >
              <label htmlFor="pass" style={{ color: "#fff" }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="pass"
                required
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button className="btn-login">Log in</button>
          </form>
          <Link to='/forget-password' className="forget-password">
            Forget password
          </Link>
          <ToastContainer />
        </div>
        <div className="login-img">
          <img src={"login.svg"} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
