import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../auth/userCard.css";

const UserCard = ({ user, onClose }) => {
  return (
    <div className="userCard">
      <div className="userCardHeader">
        <h2 class="underline">User Details</h2>
        <button onClick={onClose} className="closeButton">
          <AiOutlineClose />
        </button>
      </div>
      <div className="userCardBody">
        <img
          src={user.photo}
          alt="userPhoto"
          style={{ width: "30%", height: "30%" }}
        />
        <div className="userDetails">
          <p className="userDetail">
            <span className="userDetailTitle">First Name:</span>{" "}
            {user.first_name}
          </p>
          <p className="userDetail">
            <span className="userDetailTitle">Last Name:</span> {user.last_name}
          </p>
          <p className="userDetail">
            <span className="userDetailTitle">NIC:</span> {user.nic}
          </p>
          <p className="userDetail">
            <span className="userDetailTitle">Email:</span> {user.email}
          </p>
          <p className="userDetail">
            <span className="userDetailTitle">Address:</span> {user.address}
          </p>
          <p className="userDetail">
            <span className="userDetailTitle">Phone:</span> {user.phone}
          </p>
          <p className="userDetail">
            <span className="userDetailTitle">Date of Birth:</span>{" "}
            {user.date_of_birth}
          </p>
          <p className="userDetail">
            <span className="userDetailTitle">Created At:</span>{" "}
            {user.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
