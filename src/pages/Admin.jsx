// import { Box } from "@mui/material";
// import AddNewProduct from "./components/AddNewProduct";
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import AdminProducts from "./components/Admin Components/AdminProducts";
// import EditProduct from "./components/EditProduct";
// import AddNewUser from "./components/AddNewUser";
// import Users from "./components/Users";
// import EditUser from "./components/EditUser";
// import Carts from "./components/Carts";
// import CartProducts from "./components/CartProducts";
// import Error from "./components/Error";
// import { useEffect, useState } from "react";

// function Admin() {
//   // useEffect(() => {
//   //   const userIsAdmin = JSON.parse(
//   //     JSON.parse(localStorage.getItem("persist:root")).user
//   //   )
//   //     ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   //         ?.isAdmin
//   //     : false;
//   //   console.log(userIsAdmin);
//   //   if (userIsAdmin) {
//   //     setIsLoggedIn(true);
//   //     navigate("/");
//   //   } else if (
//   //     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   //       ?.isAdmin === false
//   //   ) {
//   //     navigate("/error");
//   //   } else if (
//   //     !JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   //   ) {
//   //     navigate("/login");
//   //   }
//   // }, [navigate]);

//   return (
//     <Box>
//       <Routes>
//         <Route path="/admin/products" element={<AdminProducts />} />
//         {/* <Route path="/users" element={<Users />} />
//         <Route path="/carts" element={<Carts />} />
//         <Route path="/products/add" element={<AddNewProduct />} />
//         <Route path="/users/add" element={<AddNewUser />} />
//         <Route path="/carts/products/:id" element={<CartProducts />} />
//         <Route path="/products/:id" element={<EditProduct />} />
//         <Route path="/users/:id" element={<EditUser />} />
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="/error" element={<Error isLoggedIn={isLoggedIn} />} /> */}
//       </Routes>
//     </Box>
//   );
// }

// export default Admin;
