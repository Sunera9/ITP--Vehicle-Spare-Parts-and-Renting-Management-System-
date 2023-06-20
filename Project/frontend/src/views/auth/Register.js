import styles from "./Register.css";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  validateEmail,
} from "../../services/userauthService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/userauthslice"
import Navbar from "../navigationbar/navbar"
const initialState = {
  email: "",
  password: "",
  password2: "",
  first_name: "",
  last_name: "",
  address: "",
  photo: "",
   date_of_birth: "",
   nic:"",
};

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [fullName, setFullName] = useState(""); // new state for the full name
  const { email, password, first_name, last_name, address, password2, date_of_birth,
    nic,phone } =
    formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "first_name" || name === "last_name") {
      // update full name state when first name or last name changes
      setFullName(`${formData.first_name} ${formData.last_name}`);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    if (!first_name || !last_name || !email || !address || !password || !nic) {
    }

    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }
     if (password.length < 6) {
       return toast.error("NIC Must be up to 6 characters");
     }
      if (phone.length < 10) {
        return toast.error("Phone number must have 10 numbers");
      }

    const userData = {
      email,
      password,
      first_name,
      last_name,
      address,
      date_of_birth,
      nic,
      phone,
    };

    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.first_name));
        history.push("/Home");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };
  //toogle password 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  


  return (
    <>
      <Navbar />
      <div className="register-slide-container">
        <div className="register-left-slide">
          <img src={require("./Logo.png")} alt="signinLogo"></img>
          <h3>Already have an account?</h3>
          <Link to="/Login">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="register-right-slide">
          <div>
            <h2>Welcome {fullName}</h2> {/* display full name or "Sign In" */}
          </div>

          <form onSubmit={register}>
            <div class="row">
              <div>
                <label className="register-fName-label">First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="first_name"
                  value={first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="register-lName-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  name="last_name"
                  value={last_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label class="date_of_birth-label">Date of birth:</label>
              <input
                type="date"
                placeholder="date_of_birthR"
                required
                name="date_of_birth"
                value={date_of_birth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="register-address-label">Address:</label>
              <input
                type="text"
                placeholder="Address"
                required
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="register-address-label">NIC</label>
              <input
                type="text"
                placeholder="nic"
                required
                name="nic"
                value={nic}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="register-email-label">Email:</label>
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
              <label className="register-email-label">Phone:</label>
              <input
                type="text"
                placeholder="Phone"
                required
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="register-password-label">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className={`password-toggle-button ${
                    showPassword ? "show-password" : ""
                  }`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="register--confirm-password-label">
                Confirm Password
              </label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  required
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className={`password-toggle-button ${
                    showConfirmPassword ? "show-password" : ""
                  }`}
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="register-signin-button-container">
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
