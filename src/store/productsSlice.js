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
      "https://mern-shopping-api.onrender.com/api/products"
    );
    return response.data;
  }
);

// fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (categoryId) => {
    const response = await axios.get(
      `https://mern-shopping-api.onrender.com/api/products?category=${categoryId}`
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

// ADMIN THINGS
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).accessToken;
    try {
      const response = await axios.delete(
        `https://mern-shopping-api.onrender.com/api/products/${productId}`,
        {
          headers: { token: `Bearer ${token}` },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ newProductData, productId }) => {
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).accessToken;
    try {
      const res = await axios.put(
        "https://mern-shopping-api.onrender.com/api/products/" + productId,
        newProductData,
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

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData) => {
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).accessToken;
    try {
      const response = await axios.post(
        "https://mern-shopping-api.onrender.com/api/products/",
        productData,
        {
          headers: { token: `Bearer ${token}` },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
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
    // add product reducers

    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      console.log("product added");
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

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

    // delete product reducers

    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.products = state.products.filter(
        (product) => product.id !== action.payload._id
      );
      console.log("product deleted");
    });

    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    // update product reducers

    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;

      // Find the index of the updated product in the state array
      const index = state.products.findIndex(
        (p) => p.id === action.payload._id
      );

      if (index !== -1) {
        // Create a new object with the updated product data
        const updatedProduct = {
          ...state.products[index],
          ...action.payload,
        };

        // Create a new array with the updated product data
        const updatedProducts = [
          ...state.products.slice(0, index),
          updatedProduct,
          ...state.products.slice(index + 1),
        ];

        // Update the state with the new array of products
        state.products = updatedProducts;
      }
    });

    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default productsSlice.reducer;
