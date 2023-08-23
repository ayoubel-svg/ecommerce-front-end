import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login-page.css"
import login from "../assets/login.svg";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import google from "../assets/google.png"
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
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
    toast.error("inccorect email or password", {
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
  const token = sessionStorage.getItem("token")
  if (token) navigate("/")
  return (
    <div className="login-page">
      <div className="login-container">
        <Link className="google-login">
          <img src={google} alt="" />
          <span>Google</span>
        </Link>
        <div style={{ color: "white" }}>
          Or with email and password
        </div>
        <form className="login-form" onSubmit={handleSubmit} method="post">
          <div style={{ display: isCorrect ? "" : "none", color: "red" }}>
            Invalid Email Ou Password
          </div>
          <div className="email-box">
            <label htmlFor="email" style={{ color: "#fff" }}>
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
              placeholder="Email *"
            />
          </div>
          <div className="pass-box" >
            <label htmlFor="pass" style={{ color: "#fff" }}>
              Password <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="pass"
              required
              onChange={handleChange}
              placeholder="Password *"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <span
              style={{
                color: /[a-z]+/.test(values.password) ? "green" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
              At least one lowercase letter
            </span>
            <span
              style={{
                color: /[A-Z]+/.test(values.password) ? "green" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
              At least one uppercase letter
            </span>
            <span
              style={{
                color: /[0-9]+/.test(values.password) ? "green" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
              At least one number
            </span>
            <span
              style={{
                color: /[^\w\s]/.test(values.password) ? "green" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
              At least one special caracters
            </span>
            <span
              style={{
                color: values.password.length > 8 ? "green" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
              At least 8 caracters
            </span>
          </div>

          <button className="btn-login">Log in</button>
        </form>
        <Link to="/register" className="to-signup">
          Don't have an account ? Register
        </Link>
        <ToastContainer />
      </div>
      <div className="login-img">
        <img src={login} alt="login" />
      </div>
    </div>
  );
};

export default Login;
