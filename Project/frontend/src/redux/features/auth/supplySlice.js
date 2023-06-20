import { createSlice } from '@reduxjs/toolkit'
//const name = JSON.parse(localStorage.getItem("company_name"))
const name = JSON.parse(localStorage.getItem("id"))



const initialState = {
    isLoggedIn: false,

    name: name ? name : "",
    supplier: {
        company_name: "",
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        company_address: "",
    },
}

const supplySlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload
        },
        SET_NAME(state, action) {
            localStorage.setItem("company_name", JSON.stringify(action.payload))
            state.name = action.payload
        },
        SET_USER(state, action) {
            const profile = action.payload;
            state.supplier.company_name = profile.company_name;
            state.supplier.first_name = profile.first_name;
            state.supplier.last_name = profile.last_name;
            state.supplier.email = profile.email;
            state.supplier.mobile = profile.mobile;
            state.supplier.company_address = profile.company_address;
        },
    },
});


export const { SET_LOGIN, SET_NAME, SET_USER } = supplySlice.actions;

//exporting an individual state
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectName = (state) => state.auth.name
export const selectUser = (state) => state.auth.supplier
export const selectFilteredSupply = (state) => state.auth.filteredSupply;

export default supplySlice.reducer;