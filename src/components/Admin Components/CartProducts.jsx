import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import { getUserCart } from "../../store/adminCartSlice";

const CartProducts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.adminCarts.cart?.products);
  console.log(cartProducts);
  const location = useLocation();
  const userId = location.pathname.split("/")[4];
  useEffect(() => {
    dispatch(getUserCart(userId));
  }, [dispatch]);

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
            Cart Products List
          </Typography>
        </Box>
        <Box sx={{ margin: "30px" }}>
          <Typography
            sx={{ fontFamily: "Rubik", margin: "20px", textAlign: "center" }}
          >
            {cartProducts?.length} Products Found
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
                  <TableCell>Image</TableCell>
                  <TableCell align="right">ID </TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartProducts?.map((product) => (
                  <TableRow
                    key={product._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        style={{ borderRadius: "50%", width: "100px" }}
                        src={product.img}
                      />
                    </TableCell>
                    <TableCell align="right">{product._id}</TableCell>
                    <TableCell align="right">{product.title}</TableCell>

                    <TableCell align="right">{product.price}</TableCell>

                    <TableCell align="right">{product.quantity}</TableCell>
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

export default CartProducts;
