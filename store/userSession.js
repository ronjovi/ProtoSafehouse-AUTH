import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false, // user is not logged in by default
  user: null,
};

export const userSession = createSlice({
  name: "userSession",
  initialState,
  reducers: {
    setUser: (state, action) => {
        console.log(action);
      // when user logs in, update logged in state
      state.user = action.payload;
      state.loggedIn = true;
    },
    logOut: (state) => {
      // when user logs in, update logged in state
      state.loggedIn = false;
      state.user = null;
    },
  },
});
// export reducers
export const {setUser, logOut} = userSession.actions;

// create getters

// get the user log in status
export const getIsLoggedIn = (state) => state.userSession.loggedIn;
export const getUser = (state) => state.userSession.user;

export default userSession.reducer;
