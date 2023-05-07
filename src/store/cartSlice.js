import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserCart = createAsyncThunk(
  "cart/getUserCart",
  async (cartId) => {
    const res = await axios.get(
      `https://mern-shopping-api.onrender.com/api/cart/${cartId}`
    );
    return res.data;
  }
);

export const updateCartProducts = createAsyncThunk(
  "cart/updateCartProducts",
  async ({ cartId, products }) => {
    try {
      const res = await axios.put(
        `https://mern-shopping-api.onrender.com/api/cart/${cartId}`,
        products
      );
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const createCart = createAsyncThunk(
  "cart/createCart",
  async (cartData) => {
    try {
      const res = await axios.post(
        "https://mern-shopping-api.onrender.com/api/cart/",
        cartData
      );
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const deleteCartProduct = createAsyncThunk(
  "cart/deleteCartProduct",
  async ({ productId, userId }) => {
    try {
      // Send a DELETE request to the backend to delete the product from the user's cart
      const res = await axios.delete(
        `https://mern-shopping-api.onrender.com/api/cart/${userId}/${productId}`
      );

      // Return the updated cart
      return res.data;
    } catch (error) {
      throw error.res.data;
    }
  }
);

export const clearCartProducts = createAsyncThunk(
  "cart/clearCartProducts",
  async (userId) => {
    try {
      // Send a DELETE request to the backend to delete the product from the user's cart
      const res = await axios.put(
        `https://mern-shopping-api.onrender.com/api/cart/${userId}`
      );

      // Return the updated cart
      return res.data;
    } catch (error) {
      throw error.res.data;
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [{ products: [] }],
    quantity: 0,
    total: 0,
    userId: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      console.log("fullfilled");
    });
    builder.addCase(getUserCart.rejected, (state, action) => {
      state.error = "rejected";
    });

    builder.addCase(updateCartProducts.pending, (state, action) => {
      state.error = false;
    });

    builder.addCase(updateCartProducts.fulfilled, (state, action) => {
      state.error = false;
      state.cart.products = action.payload.products;
      state.quantity = action.payload.quantity;
    });
    builder.addCase(updateCartProducts.rejected, (state, action) => {
      state.error = true;
      console.log(state.error);
    });
    // create cart reducers
    builder.addCase(createCart.pending, (state, action) => {
      state.loading = "pending";
      state.error = false;
    });
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.error = false;
      state.cart = action.payload;
      console.log("Cart created successfully");
    });
    builder.addCase(createCart.rejected, (state, action) => {
      state.error = true;
      console.log(state.error);
    });

    // delete cart product reducers

    builder.addCase(deleteCartProduct.pending, (state) => {
      state.loading = "pending";
      state.error = false;
    });

    builder.addCase(deleteCartProduct.fulfilled, (state, action) => {
      state.error = false;
      state.cart.products = action.payload;
    });

    builder.addCase(deleteCartProduct.rejected, (state, action) => {
      state.error = true;
    });

    // clear cart reducers

    builder.addCase(clearCartProducts.pending, (state) => {
      state.loading = "pending";
      state.error = false;
    });

    builder.addCase(clearCartProducts.fulfilled, (state, action) => {
      state.error = false;
      state.cart.products = action.payload;
    });

    builder.addCase(clearCartProducts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
