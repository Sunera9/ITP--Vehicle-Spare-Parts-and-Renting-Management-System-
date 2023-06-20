import React, { useEffect, useState } from "react";
import Styles from "../auth/editProfile.css";
import Navbar from "../navigationbar/navbar";
import { useSelector } from "react-redux";
import { selectUser }  from "../../redux/features/auth/userauthslice"
import { From,Link,useHistory} from "react-router-dom";

import UserProfile from "./userProfile";
import { toast } from "react-toastify";
import { updateUser } from "../../services/userauthService";
import { FaCamera } from "react-icons/fa";


const EditProfile = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);
  const { email } = user;
  useEffect(() => {
    if (!email) {
      history.push("/userProfile");
    }
  }, [email, history]);

  // getting the real date values function
  const formatDate = (dateStr) => {
    if (!dateStr) return "";

    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const initialState = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    address: user?.address,
    phone: user?.phone,
    photo: user?.photo,

    date_of_birth: formatDate(user?.date_of_birth),
    nic: user?.nic,
  };
  const [profile, setProfile] = useState(initialState);

  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //Handle Image Upload
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "du2lvusgo");
        image.append("upload_preset", "2002001");

        //First save image to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/du2lvusgo/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }
      // console.log(imgData);
      // toast.success("Image uploaded succesfully")

      //save Profile
      const formData = {
        first_name: profile.first_name,
        last_name: profile.last_name,
        address: profile.address,
        email: profile.email,
        phone: profile.phone,
        date_of_birth: profile.date_of_birth,
        photo: profileImage ? imageURL : profile.photo,
        nic: profile.nic,
      };

      const data = await updateUser(formData);
      console.log(data);
      toast.success("user updated");
      history.push("/userProfile");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  console.log(UserProfile);

  return (
    <>
      <Navbar />
      <div className="edit-profile-container">
        <div>
          <h2 className="edit-profile-heading">
            Edit profile {user.first_name}
          </h2>
        </div>
        <div className="edit-profile-content">
          <div className="edit-profile-left">
            <div className="edit-profile-photo">
              <img src={user?.photo} alt="edit-profileImage" />
              <div className="edit-profile-photo-overlay">
                <label htmlFor="photo-input">
                  <FaCamera className="edit-profile-photo-icon" />
                </label>
                <input
                  id="photo-input"
                  type="file"
                  name="photo"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <form
              className="--form-control --m edit-profile-form"
              onSubmit={saveProfile}
            >
              <div className="edit-profile-buttons-container">
                <button className="edit-profile-button --btn --btn-primary">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
          <div className="edit-profile-line"></div>
          <div className="edit-profile-right">
            <div className="edit-profile-name">
              {/* Profile Name content */}
            </div>
            <div className="edit-profile-info">
              <div>
                <div className="edit-profile-info-label">First Name:</div>
                <input
                  className="edit-profile-info-value"
                  type="text"
                  name="first_name"
                  value={profile?.first_name}
                  onChange={handleInputChange}
                />
                <div className="edit-profile-info-label">Last Name:</div>
                <input
                  className="edit-profile-info-value"
                  type="text"
                  name="last_name"
                  value={profile?.last_name}
                  onChange={handleInputChange}
                />
                <div className="edit-profile-info-label">Phone Number:</div>
                <input
                  className="edit-profile-info-value"
                  type="text"
                  name="phone"
                  value={profile?.phone}
                  onChange={handleInputChange}
                />
                <div>
                  <div className="edit-profile-info-label">Date of birth:</div>
                  <input
                    className="edit-profile-info-value"
                    type="date"
                    name="date_of_birth"
                    value={profile.date_of_birth}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="edit-profile-info-label">Address:</div>
                <input
                  className="edit-profile-info-value"
                  type="text"
                  name="address"
                  value={profile?.address}
                  onChange={handleInputChange}
                />
                <div className="edit-profile-info-label">NIC:</div>
                <input
                  className="edit-profile-info-value"
                  type="text"
                  name="email"
                  placeholder={profile?.nic}
                  value={profile?.nic}
                  disabled
                  onChange={handleInputChange}
                />
                <div className="edit-profile-info-label">Email:</div>
                <input
                  className="edit-profile-info-value"
                  type="text"
                  name="email"
                  placeholder={profile?.email}
                  value={profile?.email}
                  disabled
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
