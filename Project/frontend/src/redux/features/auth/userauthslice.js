import { createSlice } from "@reduxjs/toolkit";

const name = localStorage.getItem("first_name");

const initialState = {
  isLoggedIn: false,
  name: name ? name : "",
  user: {
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    photo: "",
    phone: "",
    date_of_birth: "",
    nic: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },

    SET_NAME(state, action) {
      localStorage.setItem("first_name", JSON.stringify(action.payload));
      state.name = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.first_name = profile.first_name;
      state.user.last_name = profile.last_name;
      state.user.address = profile.address;
      state.user.phone = profile.phone;
      state.user.date_of_birth = profile.date_of_birth;
      state.user.email = profile.email;
      state.user.photo = profile.photo;
      state.user.nic = profile.nic;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

//exporting an individual  state
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
