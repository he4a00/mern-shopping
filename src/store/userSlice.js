import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).accessToken;
  try {
    const res = await axios.get(
      "http://mern-shopping-api.onrender.com/api/users",
      {
        headers: { token: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).accessToken;
    try {
      const res = await axios.delete(
        `http://mern-shopping-api.onrender.com/api/users/${userId}`,
        { headers: { token: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addUser = createAsyncThunk("users/addUser", async (userData) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).accessToken;
  try {
    const res = await axios.post(
      "http://mern-shopping-api.onrender.com/api/users/add",
      userData,
      { headers: { token: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ newUserData, userId }) => {
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).accessToken;
    try {
      const res = await axios.put(
        "http://mern-shopping-api.onrender.com/api/users/" + userId,
        newUserData,
        {
          headers: { token: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: { users: [], error: null, loading: null },
  reducers: {},
  extraReducers: (builder) => {
    // get all users reducers

    builder.addCase(getAllUsers.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });

    // delete user reducers

    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.users = state.users.filter(
        (user) => user._id !== action.payload._id
      );
      console.log("user deleted");
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    // add user reducers

    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      console.log("user added");
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    // update user reducers

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      if (action.payload) {
        const index = state.users.findIndex((user) => {
          user.id === action.payload._id;
        });

        if (index !== -1) {
          const updatedUser = {
            ...state.users[index],
            ...action.payload,
          };

          const updatedUsers = [
            ...state.users.slice(0, index),
            updatedUser,
            ...state.users.slice(index + 1),
          ];

          state.users = updatedUsers;
        }
      }
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default userSlice.reducer;
