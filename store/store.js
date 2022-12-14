import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSession from "./userSession";

export const store = configureStore({
  reducer: {
    userSession: userSession,
  },
  devTools: true, // debugging in dev environment
});
