import "./App.css";
import { Box } from "@mui/material";
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
import Admin from "./pages/Admin";

function App() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  )?.isAdmin;
  console.log(admin);

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
        <Route
          path="/admin"
          element={admin ? <Admin /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Box>
  );
}

export default App;
