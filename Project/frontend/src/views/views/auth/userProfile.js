import React from "react";
import  "../auth/userProfile.css";
import { SET_USER, SET_NAME } from "../../redux/features/auth/userauthslice"
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../services/userauthService";
import Navbar from "../navigationbar/navbar";

import profileBackground from "../auth/profileBackground.png";

const UserProfile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const [UserProfile, setProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Getting use");
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <h2 className="edit-profile-heading">
          Welcome {UserProfile.first_name} {UserProfile.last_name}
        </h2>

        <div className="profile-content">
          <div className="profile-left">
            <div className="profile-photo">
              <img src={UserProfile?.photo} alt="profilepic" />
            </div>
            <div className="profile-buttons-container">
              <button className="profile-button --btn --btn-primary">
                Edit Profile
              </button>
              <button className="profile-button --btn --btn-danger">
                Delete Profile
              </button>
            </div>
          </div>
          <div className="profile-line"></div>
          <div className="profile-right">
            <div className="profile-name"></div>
            <div className="profile-info">
              <div className="profile-info-label">First Name:</div>
              <div className="profile-info-value">{UserProfile.first_name}</div>
              <div className="profile-info-label">Last Name:</div>
              <div className="profile-info-value">{UserProfile.last_name}</div>
              <div className="profile-info-label">Phone Number:</div>

              <div className="profile-info-value">{UserProfile.phone}</div>

              <div className="profile-info-label">Date of birth:</div>

              <div className="profile-info-value">
                {new Date(UserProfile.date_of_birth).toLocaleDateString(
                  undefined,
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </div>

              <div className="profile-info-label">NIC number:</div>
              <div className="profile-info-value">{UserProfile.nic}</div>
              <div className="profile-info-label">Address:</div>
              <div className="profile-info-value">{UserProfile.address}</div>
              <div className="profile-info-label">Email:</div>
              <div className="profile-info-value">{UserProfile.email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;