import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbarStyle.css";
import { logoutUser } from "../services/userauthService";
import { SET_LOGIN } from "../redux/features/auth/userauthslice";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => setShowMenu(!showMenu);

  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    history.push("/login");
  };
  return (
    <div
      className="navbars"
      style={{ position: "fixed", top: 0, left: 0, right: 0 }}
    >
      <div className="logos">
        <img src={require("../views/auth/Logo.png")} alt="Home logo" />
      </div>
      <div className="page-logos">
        <div className="nav-dropdowns">
          <button onClick={handleToggleMenu}>
            <div className="icons">
              <AiOutlineUser size={50} color="#333" />
            </div>
          </button>
          {showMenu && (
            <div className="dropdown-menus">
              {isLoggedIn && (
                <>
                  <Link to="/userProfile" className="button-links">
                    <div className="icon2">
                      <FaUserCircle />
                      <span style={{ marginLeft: "8px" }}>Profile</span>
                    </div>
                  </Link>
                  <Link to="/EditProfile" className="button-links">
                    <div className="icon2">
                      <FaUserEdit />
                      <span style={{ marginLeft: "8px" }}>Update </span>
                    </div>
                  </Link>

                  <hr />
                </>
              )}

              <button onClick={logout} className="button-links">
                {isLoggedIn ? (
                  <>
                    <AiOutlineLogout
                      style={{ verticalAlign: "middle", marginRight: "4px" }}
                    />
                    Logout
                  </>
                ) : (
                  <>
                    <AiOutlineLogin
                      style={{ verticalAlign: "middle", marginRight: "4px" }}
                    />
                    Login
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
