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

function App() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

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
      </Routes>
    </Box>
  );
}

export default App;
