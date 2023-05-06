import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all products

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await axios.get(
      "https://mern-shopping-api.onrender.com/api/products"
    );
    return response.data;
  }
);

// fetch first 8 products

export const fetchFeaturedProducts = createAsyncThunk(
  "products/fetchFeaturedProducts",
  async () => {
    const response = await axios.get(
      "https://mern-shopping-api.onrender.com/api/products?new=true"
    );
    return response.data;
  }
);

// fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (categoryId) => {
    const response = await axios.get(
      `http://mern-shopping-api.onrender.com/api/products?category=${categoryId}`
    );
    return response.data;
  }
);

//fetch products by id

export const fetchProductsById = createAsyncThunk(
  "products/fetchProductsById",
  async (id) => {
    const response = await axios.get(
      `https://mern-shopping-api.onrender.com/api/products/${id}`
    );
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    featuredProducts: [],

    loading: "idle",
    error: null,
  },
  reducers: {},
  // fetch all product reducers
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = "fullfilled";
      state.products = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message;
    });

    // fetch featured products reducers

    builder.addCase(fetchFeaturedProducts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.loading = "fullfilled";
      state.featuredProducts = action.payload;
    });
    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message;
    });

    // fetch products by category reducers

    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.loading = "fullfilled";
      state.products = action.payload;
    });
    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message;
    });

    // // fetch products by id reducers

    // builder.addCase(fetchProductsById.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(fetchProductsById.fulfilled, (state, action) => {
    //   state.loading = "fullfilled";
    //   state.products = action.payload;
    // });
    // builder.addCase(fetchProductsById.rejected, (state, action) => {
    //   state.loading = "rejected";
    //   state.error = action.error.message;
    // });
  },
});

export default productsSlice.reducer;
