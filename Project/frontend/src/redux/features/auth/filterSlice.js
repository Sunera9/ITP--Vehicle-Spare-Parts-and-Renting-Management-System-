import { createSlice } from "@reduxjs/toolkit";
import { employee } from "../../employee";

const initialState = {
   fliteredEmployee : []
}

const filterSlice = createSlice ({
    name:"filter",
    initialState,
    reducers:{
        FILTER_EMPLOYEE(state, action){
             const {employees, search} = action.payload 
             const tempEmployee = employees.filter((employee) => employee.first_name.toLowerCase().includes(search.toLowerCase()) || 
                                                                 employee.designation.toLowerCase().includes(search.toLowerCase()))

            state.fliteredEmployee = tempEmployee
        },
    },
})

export const { FILTER_EMPLOYEE} = filterSlice.actions

export const selectFilteredEmployee = (state) => state.filter.fliteredEmployee;

export default filterSlice.reducer