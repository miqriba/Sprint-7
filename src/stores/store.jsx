import { configureStore } from "@reduxjs/toolkit";
import shipsReducer from "../components/shipsSlicer";

export const store = configureStore({
  reducer: {
    ships: shipsReducer,
  },
});
