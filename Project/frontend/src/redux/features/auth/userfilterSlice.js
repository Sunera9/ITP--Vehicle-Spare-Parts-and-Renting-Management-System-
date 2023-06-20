import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filteredUsers: [],
};

const userFilterSlice = createSlice({
  name: "userFilter",
  initialState,

  reducers: {
    FILTER_USERS(state, action) {
      const { userRoutes, search } = action.payload;
      const tempUsers = userRoutes.filter(
        (user) =>
          (user.nic && user.nic.includes(search)) ||
          (user.email &&
            user.email.toLowerCase().includes(search.toLowerCase()))
      );
      state.filteredUsers = tempUsers;
    },
  },
});

export const { FILTER_USERS } = userFilterSlice.actions;

export const selectFilteredUsers = (state) => state.userFilter.filteredUsers;

export default userFilterSlice.reducer;