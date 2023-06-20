import React, { useState } from "react";
import styles from "./Forgot.css";
import { Link } from "react-router-dom";
import { forgotPassword, validateEmail } from "../../services/userauthService";

import { toast } from "react-toastify";

function Forgot() {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
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

          <h1>Forgot Password</h1>
          <form onSubmit={forgot}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="forgot-btn-primary">
              Get Reset Email
            </button>
          </form>
          <p>
            Remember your password?
            <Link to="/Login" className="atag">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
