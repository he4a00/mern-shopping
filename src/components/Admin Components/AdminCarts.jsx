import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";
import { deleteCart, getCarts } from "../../store/adminCartSlice";

const Carts = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.adminCarts.cart);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  const handleDelete = (cartId) => {
    // Make a request to get the cart ID based on the user ID

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCart(cartId)).then((cartResult) => {
          if (cartResult.payload) {
            setCartList((prevCarts) =>
              prevCarts.filter((cart) => cart._id !== cartResult.payload._id)
            );
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error deleting user",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <Box sx={{ display: "flex", flex: "5" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ padding: "30px" }}>
          <Typography variant="h5" sx={{ fontFamily: "Rubik" }}>
            Carts List
          </Typography>
        </Box>
        <Box sx={{ margin: "30px" }}>
          <Typography
            sx={{ fontFamily: "Rubik", margin: "20px", textAlign: "center" }}
          >
            {carts?.length} Carts Found
          </Typography>
        </Box>

        <Box sx={{}}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Cart ID </TableCell>
                  <TableCell align="right">User ID</TableCell>
                  <TableCell align="right">Products</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {carts &&
                  Array.isArray(carts) &&
                  carts.map((cart) => (
                    <TableRow
                      key={cart._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{cart._id}</TableCell>
                      <TableCell align="right">{cart.userId}</TableCell>

                      <TableCell align="right">
                        <Box sx={{ margin: "10px" }}>
                          <Link to={`/admin/cart/products/${cart.userId}`}>
                            <VisibilityIcon
                              sx={{ cursor: "pointer", color: "green" }}
                            />
                          </Link>
                          <DeleteIcon
                            onClick={() => handleDelete(cart._id)}
                            sx={{ cursor: "pointer", color: "red" }}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Carts;
