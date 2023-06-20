import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbarStyle.css";
//import { logoutUser } from "../../services/userauthService";
//import { SET_LOGIN } from "../../redux/features/auth/userauthslice";
//import { useDispatch, useSelector } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
function Navbar() {
 {/* const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => setShowMenu(!showMenu);

  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    history.push("/login");
  };*/}
  return (
    <div
      className="navbars"
      style={{ position: "fixed", top: 0, left: 0, right: 0 }}
    >
      <div className="logos">
        <img  src="/playground_assets/pnglogoimage11147-1frv-200h.png" alt="Home logo" />
      </div>
      <div className="page-logos">
        <div className="nav-dropdowns">
         {/* <button onClick={handleToggleMenu}>*/}
            <div className="icons">
              <AiOutlineUser size={50} color="#333" />
            </div>
           {/*</button>*/}
         {/* {showMenu && (*/}
            
         {/* )}*/}
        </div>
      </div>
          

    </div>

    
  );
}

export default Navbar;
