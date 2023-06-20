import styles from "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser, validateEmail } from "../../../services/userauthService";

import { Link,useHistory } from "react-router-dom/cjs/react-router-dom";

import { SET_LOGIN, SET_NAME } from "../../../redux/features/auth/userauthslice"
import Navbar from "../navigationbar/navbar"


const initialState = {
  email: "",
  password: "",
};


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.first_name));
      history.push("/home");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-slide-container">
        <div className="login-left-slide">
          <img src={require("./Logo.png")} alt="signinLogo"></img>
          <h3>Dont have an account?</h3>
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="login-right-slide">
          <div>
            <h2>Sign In</h2>
          </div>

          <form onSubmit={login}>
            <div>
              <label className="email-label">Email:</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="password-label">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="signin-button-container">
              <button>Sign In</button>
            </div>
          </form>
          <p>
            <Link to="/Forgot"> Forgot the password?</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
