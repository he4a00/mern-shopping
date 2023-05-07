import "./App.css";
import { Box, Typography } from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AdminHome from "./components/Admin Components/AdminHome";
import AdminProducts from "./components/Admin Components/AdminProducts";
import AddNewProduct from "./components/Admin Components/AddNewProduct";
import EditProduct from "./components/Admin Components/EditProduct";
import AdminUsers from "./components/Admin Components/AdminUsers";
import EditUser from "./components/Admin Components/EditUser";
import AdminCarts from "./components/Admin Components/AdminCarts";

function App() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  )?.isAdmin;
  // console.log(admin);

  // if (user) {
  //   navigate("/");
  // }

  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" replace />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        {/* Admin Components */}
        {admin && (
          <>
            <Route
              path="/admin"
              element={admin ? <AdminHome /> : <Navigate to="/" replace />}
            />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/products/add" element={<AddNewProduct />} />
            <Route path="/admin/products/:id" element={<EditProduct />} />
            <Route path="/admin/users/" element={<AdminUsers />} />
            <Route path="/admin/users/:id" element={<EditUser />} />
            <Route path="/admin/carts" element={<AdminCarts />} />
          </>
        )}
      </Routes>
    </Box>
  );
}

export default App;
