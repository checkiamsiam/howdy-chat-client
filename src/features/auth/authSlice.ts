import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  avatar: "",
  token: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
