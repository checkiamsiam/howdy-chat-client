import { configureStore } from "@reduxjs/toolkit";
import apiBase from "./apiBase";

export const store = configureStore({
  reducer: {
    [apiBase.reducerPath]: apiBase.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiBase.middleware),
  devTools: import.meta.env.MODE === "development",
});

export default store;
