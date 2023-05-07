import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarts = createAsyncThunk("adminCarts/getCarts", async () => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).accessToken;
  try {
    const res = await axios.get(
      "https://mern-shopping-api.onrender.com/api/cart/",
      {
        headers: { token: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getUserCart = createAsyncThunk(
  "adminCarts/getUserCart",
  async (userId) => {
    try {
      const res = await axios.get(
        "https://mern-shopping-api.onrender.com/api/cart/" + userId
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteCart = createAsyncThunk(
  "adminCarts/deleteCart",
  async (cartId) => {
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).accessToken;
    try {
      const res = await axios.delete(
        "https://mern-shopping-api.onrender.com/api/cart/" + cartId,
        { headers: { token: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const adminCartSlice = createSlice({
  name: "adminCarts",
  initialState: {
    cart: [{ products: [] }],
    userId: null,
    loading: null,
    error: null,
  },
  extraReducers: (builder) => {
    // get carts reducers
    builder.addCase(getCarts.pending, (state) => {
      state.error = false;
      state.loading = true;
    });

    builder.addCase(getCarts.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.cart = action.payload;
    });

    builder.addCase(getCarts.rejected, (state) => {
      state.error = false;
      state.loading = true;
    });

    // get user cart reducers

    builder.addCase(getUserCart.pending, (state) => {
      state.error = false;
      state.loading = true;
    });

    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.cart = action.payload;
    });

    builder.addCase(getUserCart.rejected, (state) => {
      state.error = false;
      state.loading = true;
    });

    // delete cart reducers

    builder.addCase(deleteCart.pending, (state) => {
      state.error = false;
      state.loading = true;
    });

    builder.addCase(deleteCart.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      console.log("cart deleted");
      state.cart = action.payload;
    });

    builder.addCase(deleteCart.rejected, (state) => {
      state.error = false;
      state.loading = true;
    });
  },
});

export default adminCartSlice.reducer;
