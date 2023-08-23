import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_users } from "../data/LoginSysteme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/signup-page.css";
import signup from "../assets/signup.svg";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import google from "../assets/google.png"
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }
  const notify = () =>
    toast.success("account has been created", {
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
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register",
        values,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      res.status === 200 && notify();
      sessionStorage.setItem("token", res.data.data.token)
      sessionStorage.setItem("id", res.data.data.user.id)
      setTimeout(() => {
        navigate("/")
      }, 200)
    } catch (err) {
      console.log(`Error => ${err.message}`);
    }
  }

  const token = sessionStorage.getItem("token")
  setTimeout(() => {
    if (token) navigate("/")
  }, 100)
  return (
    <div className="signup-page">
      <div className="signup-form">
        {/* <h1 style={{ color: "white" }}>SignUp Page</h1> */}
        <Link className="signup-google">
          <img src={google} alt="pic" />
          <span>Google</span>
        </Link>
        <div style={{ width: "100%", padding: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>Or with email and password</div>
        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="name-box" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <label htmlFor="name" style={{ color: "white", fontSize: "1em" }}>
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={handleChange}
              placeholder="Full Name *"
            />
          </div>
          <div className="email-box" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <label htmlFor="email" style={{ color: "white", fontSize: "1em" }}>
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
              required
              onChange={handleChange}
            />
          </div>
          <div className="pass-box" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <label htmlFor="pass" style={{ color: "white", fontSize: "1em" }}>
              Password <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="pass"
              required
              placeholder="Password *"
              onChange={handleChange}
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
          <button className="btn-signup">Register</button>
        </form>
        <Link to="/login" className="to-login">
          Already I Have an account ?
        </Link>
        <ToastContainer />
      </div>
      <div className="signup-img">
        <img src={signup} alt="signup" />
      </div>
    </div>
  );
};

export default SignUp;
