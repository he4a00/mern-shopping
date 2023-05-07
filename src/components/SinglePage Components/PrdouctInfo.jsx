import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCartProducts } from "../../store/cartSlice";
import Swal from "sweetalert2";

const PrdouctInfo = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState([]);
  const error = useSelector((state) => state.cart.error);
  const cart = useSelector((state) => state.cart.cart);

  const cartId = cart?._id;

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `https://mern-shopping-api.onrender.com/api/products/${id}`
      );
      setProduct(res.data);
    };
    getProduct();
  }, [id]);

  const dispatch = useDispatch();

  const handleClick = () => {
    const updatedProducts = [
      ...cart.products,
      { ...product, quantity: counter },
    ];
    const updatedCart = {
      ...cart,
      products: updatedProducts,
      quantity: cart.quantity + counter,
      total: cart.total + product.price * counter,
    };
    dispatch(
      updateCartProducts({
        cartId,
        products: updatedCart,
        quantity: quantity,
      })
    ).then((result) => {
      if (result.payload) {
        Swal.fire({
          icon: "success",
          title: `Added To Cart Successfully`,
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };

  return (
    <Box sx={{ paddingTop: "200px", paddingBottom: "100px" }}>
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
      <Box sx={{ maxWidth: "1128px", margin: "auto", width: "100%" }}>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box sx={{ display: "flex" }}>
            <img style={{ width: "500px" }} src={product.img} />
          </Box>
          <Box sx={{ margin: "40px" }}>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "Rubik",
              }}
              variant="h3"
            >
              {product.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Rubik",
                marginTop: "20px",
                fontSize: "25px",
                color: "red",
              }}
            >
              {"$" + product.price + ".00"}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Rubik",
                marginTop: "20px",
              }}
            >
              {product.desc}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc5c5",
                paddingBottom: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#f5f5f5",
                  height: "50px",
                  margin: "10px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Rubik",
                    margin: "20px",
                    cursor: "pointer",
                  }}
                >
                  -
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", fontFamily: "Rubik", margin: "20px" }}
                >
                  {counter}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Rubik",
                    margin: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </Typography>
              </Box>
              <Button
                onClick={handleClick}
                sx={{
                  padding: "10px",
                  borderRadius: "0",
                  color: "#fff",
                  width: "150px",
                  height: "50px",
                  backgroundColor: "#7fad39",
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#7fad39",
                  },
                }}
              >
                ADD TO CART
              </Button>

              <Box
                sx={{
                  width: "60px",
                  height: "50px",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                  cursor: "pointer",
                }}
              >
                <FavoriteIcon />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ margin: "30px" }}>
                <Typography
                  sx={{
                    margin: "10px",
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                  }}
                >
                  Availability
                </Typography>
                <Typography
                  sx={{
                    margin: "10px",
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                  }}
                >
                  Shipping
                </Typography>
                <Typography
                  sx={{
                    margin: "10px",
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                  }}
                >
                  Color
                </Typography>
              </Box>
              <Box sx={{ margin: "30px" }}>
                <Typography sx={{ margin: "10px", fontFamily: "Rubik" }}>
                  {" "}
                  {product.inStock ? (
                    <Typography sx={{ fontFamily: "Rubik" }}>
                      Availble
                    </Typography>
                  ) : (
                    <Typography sx={{ fontFamily: "Rubik" }}>
                      Not Available
                    </Typography>
                  )}
                </Typography>
                <Typography sx={{ margin: "10px", fontFamily: "Rubik" }}>
                  {" "}
                  01 day shipping. Free pickup today
                </Typography>
                <Typography sx={{ margin: "10px", fontFamily: "Rubik" }}>
                  {" "}
                  {product.color}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrdouctInfo;
