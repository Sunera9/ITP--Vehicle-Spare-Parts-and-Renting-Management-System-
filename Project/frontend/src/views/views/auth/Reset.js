import React, { useState } from "react";
import styles from "./Forgot.css";
import { Link, useParams } from "react-router-dom";
import { resetPassword } from "../../services/userauthService";
import { toast } from "react-toastify";

const initialState = {
  password: "",
  password2: "",
};

const Reset = () => {
  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;

  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
      password2,
    };

    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="forgot-card my-custom-class">
      <div className="forgot-card ">
        <div className="forgot-card-body">
          <img
            src={require("./email.png")}
            alt="emailLogo"
            className="emailLogo"
          ></img>

          <h1>Reset Password</h1>
          <form onSubmit={reset}>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter new password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password2"
                placeholder="Confirm new password"
                value={password2}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="forgot-btn-primary">
              Reset Password
            </button>
          </form>
          <p>
            Remember your password? <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reset;
