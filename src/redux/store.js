import { configureStore, Tuple } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import apodSlice from "./slices/apodSlice";

export const setupStore = () => {
  return configureStore({
    reducer: {
      apod: apodSlice,
    },
    middleware: () => new Tuple(thunk),
  });
};
