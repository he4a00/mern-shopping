import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    try {
      const res = await axios.post(
        "https://mern-shopping-api.onrender.com/api/users/register",
        userData
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const LoginUser = createAsyncThunk(
  "auth/LoginUser",
  async (userData) => {
    try {
      const res = await axios.post(
        "http://localhost:30https://mern-shopping-api.onrender.com/api/users/login",
        userData
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: null, error: null },
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(LoginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.loading = null;
      console.log(action.payload);
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
