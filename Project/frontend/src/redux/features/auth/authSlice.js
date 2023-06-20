import {createSlice } from '@reduxjs/toolkit'
const name = localStorage.getItem("first_name");


const initialState = {
       isLoggedIn : false,
       name: name ? name : "",
       employee: {
        first_name: "",
        last_name: "",
        address:"",
        mobile:"",
        designation:"",
        email:"",
        profile_pic:"",
        date:"",
        empID: ""
       },
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        SET_LOGIN(state, action){
            state.isLoggedIn = action.payload
        },
        SET_NAME(state, action){
            localStorage.setItem("first_name", JSON.stringify(action.payload))
            state.name = action.payload
        },
        SET_USER(state, action){
            const profile = action.payload;
            state.employee.first_name = profile.first_name;
            state.employee.last_name = profile.last_name;
            state.employee.address = profile.address;
            state.employee.mobile = profile.mobile;
            state.employee.designation = profile.designation;
            state.employee.email = profile.email;
            state.employee.profile_pic = profile.profile_pic;
            state.employee.date = profile.date;
            state.employee.empID = profile.empID;
        },
    },
});

export const {SET_LOGIN, SET_NAME, SET_USER} = authSlice.actions;

//exporting an individual  state
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectName = (state) => state.auth.name
export const selectUser = (state) => state.auth.employee

export default authSlice.reducer