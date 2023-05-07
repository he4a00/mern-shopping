import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Input,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserCart,
  deleteCartProduct,
  clearCartProducts,
  updateQuantity,
} from "../../store/cartSlice.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartTable = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  const cartProducts = useSelector((state) => state.cart.cart?.products);
  const error = useSelector((state) => state.cart.error);

  const [counter, setCounter] = useState(0);

  const userId = user._id;

  useEffect(() => {
    dispatch(getUserCart(user._id));
  }, [dispatch]);

  const handleDeleteCartProduct = (userId, productId) => {
    dispatch(deleteCartProduct(userId, productId)).then((result) => {
      if (result.payload) {
        Swal.fire({
          icon: "success",
          title: `Removed Successfully`,
          showConfirmButton: false,
          timer: 3500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleClearCartProducts = (userId) => {
    dispatch(clearCartProducts(userId)).then((result) => {
      if (result.payload) {
        Swal.fire({
          icon: "success",
          title: `Cart Cleared Successfully`,
          showConfirmButton: false,
          timer: 3500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleQuantity = (userId, productId, counter) => {
    dispatch(updateQuantity({ userId, productId, quantity: counter }));
  };

  let price = cart?.products?.reduce((totalPrice, cartProduct) => {
    return totalPrice + cartProduct.price * cartProduct.quantity;
  }, 0);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
      {error && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert variant="filled" severity="error">
            <AlertTitle>Error</AlertTitle> You're Not Logged In{" --- "}
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Rubik",
              }}
              to="/login"
            >
              Login Here!
            </Link>
          </Alert>
        </Snackbar>
      )}
      ;
      <Box sx={{ margin: "auto", width: "100%", maxWidth: "1128px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Products</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
                <StyledTableCell align="right">Edit Quantity</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart ? (
                cartProducts?.map((cartProduct, idx) => (
                  <StyledTableRow key={idx}>
                    <StyledTableCell component="th" scope="row">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          style={{
                            width: "100px",
                            margin: "20px",
                          }}
                          src={cartProduct.img}
                        />{" "}
                        <Typography
                          sx={{
                            margin: "10px",
                            fontFamily: "Rubik",
                            fontSize: "20px",
                          }}
                        >
                          {cartProduct.title}
                        </Typography>
                      </Box>
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      <Typography
                        sx={{
                          margin: "10px",
                          fontFamily: "Rubik",
                          fontSize: "20px",
                        }}
                      >
                        {"$" + cartProduct.price + ".00"}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Typography
                        sx={{
                          margin: "10px",
                          fontFamily: "Rubik",
                          fontSize: "20px",
                        }}
                      >
                        {cartProduct.quantity}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Typography
                        sx={{
                          margin: "10px",
                          fontFamily: "Rubik",
                          fontSize: "20px",
                        }}
                      >
                        {"$" + cartProduct.quantity * cartProduct.price + ".00"}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        onClick={() =>
                          handleDeleteCartProduct({
                            userId,
                            productId: cartProduct._id,
                          })
                        }
                        variant="contained"
                        sx={{
                          padding: "10px",
                          borderRadius: "0",
                          color: "#fff",
                          width: "100px",
                          borderRadius: "4px",
                          backgroundColor: "red",
                          fontFamily: "Rubik",
                          "&:hover": {},
                        }}
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Box
                        sx={{
                          backgroundColor: "#f5f5f5",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontFamily: "Rubik",

                            cursor: "pointer",
                          }}
                        >
                          -
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontFamily: "Rubik",
                            margin: "20px",
                          }}
                        >
                          {counter}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontFamily: "Rubik",

                            cursor: "pointer",
                          }}
                          onClick={() => setCounter(counter + 1)}
                        >
                          +
                        </Typography>
                        <Button
                          onClick={() =>
                            handleQuantity(userId, cartProduct._id, counter)
                          }
                          sx={{
                            padding: "10px",
                            borderRadius: "0",
                            color: "#fff",
                            width: "100px",
                            height: "50px",
                            marginLeft: "20px",
                            borderRadius: "6px",
                            backgroundColor: "#7fad39",
                            fontFamily: "Rubik",
                            fontWeight: "bold",
                            "&:hover": {
                              backgroundColor: "#7fad39",
                            },
                          }}
                        >
                          Edit
                        </Button>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    margin: "20px",
                    textAlign: "center",
                  }}
                >
                  You Don't Have Any Products
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "30px",
          }}
        >
          <Link to="/">
            <Button
              sx={{
                padding: "10px",
                borderRadius: "0",
                color: "#fff",
                width: { xs: "300px", md: "250px", lg: "250px" },
                backgroundColor: "#b2b2b2",
                fontFamily: "Rubik",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#7fad39",
                },
              }}
            >
              Continue Shopping
            </Button>
          </Link>

          <Button
            onClick={() => handleClearCartProducts(userId)}
            sx={{
              padding: "10px",
              borderRadius: "0",
              color: "#fff",
              width: { xs: "300px", md: "250px", lg: "250px" },
              backgroundColor: "#b2b2b2",
              fontFamily: "Rubik",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#7fad39",
              },
            }}
          >
            Clear Cart
          </Button>
        </Box>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box sx={{ margin: "30px" }}>
            <Typography
              sx={{
                marginBottom: "10px",
                fontFamily: "Rubik",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Discount Codes
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <input
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #b2b2b2",
                  padding: "15px",
                  fontSize: "16px",
                  color: "#333",
                  boxSizing: "border-box",
                  outline: "none",
                  fontSize: "17px",
                  fontFamily: "Rubik",
                  width: "300px",
                }}
                placeholder="What do you need?"
              />
              <Button
                sx={{
                  padding: "10px",
                  borderRadius: "0",
                  color: "#fff",
                  height: "50px",
                  width: "150px",
                  backgroundColor: "#b2b2b2",
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  margin: "10px",
                  "&:hover": {
                    backgroundColor: "#7fad39",
                  },
                }}
              >
                Apply Coupon
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f1e1e1",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "30px",
            }}
          >
            <Box sx={{ margin: "10px" }}>
              <Typography
                sx={{
                  margin: "10px",
                  fontFamily: "Rubik",
                  fontSize: "18px",
                }}
              >
                Products Number
              </Typography>
              <Typography
                sx={{
                  margin: "10px",
                  fontFamily: "Rubik",
                  fontSize: "18px",
                }}
              >
                Subtotal
              </Typography>
              <Typography
                sx={{
                  margin: "10px",
                  fontFamily: "Rubik",
                  fontSize: "18px",
                }}
              >
                Total
              </Typography>
            </Box>

            <Box sx={{ margin: "10px" }}>
              <Typography
                sx={{
                  margin: "10px",
                  fontFamily: "Rubik",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {!cart?.products?.length ? "0" : `${cart?.products?.length}`}
              </Typography>
              <Typography
                sx={{
                  margin: "10px",
                  fontFamily: "Rubik",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {!cart?.products ? "$00.00" : `${"$" + price + ".00"}`}
              </Typography>
              <Typography
                sx={{
                  margin: "10px",
                  fontFamily: "Rubik",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {!cart?.products ? "$00.00" : `${"$" + price + ".00"}`}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CartTable;
