import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSession from "./userSession";

export const store = configureStore({
  reducer: {
    // 1. if user is logged, user data
    userSession: userSession,
  },
  devTools: true, // debugging in dev environment
});
