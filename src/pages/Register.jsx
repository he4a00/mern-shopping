import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/authSlice";
import { Link } from "react-router-dom";
import { createCart } from "../store/cartSlice";
import Swal from "sweetalert2";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, password })).then((result) => {
      if (result.payload) {
        Swal.fire({
          icon: "success",
          title: "Your Account Has been registered",
          showConfirmButton: false,
          timer: 1500,
        });
        const user = result.payload;
        const cartData = {
          userId: user._id,
          products: [],
        };
        dispatch(createCart(cartData));
      } else if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username already esixts",
        });
      }
    });
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 8 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={6} sx={{ p: 4 }}>
          <Grid container justifyContent="center">
            <Avatar sx={{ bgcolor: "primary.main" }}>L</Avatar>
          </Grid>
          <Typography variant="h5" align="center" sx={{ mt: 2, mb: 4 }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign in
            </Button>
          </form>
          <Link
            style={{
              fontFamily: "Rubik",
              margin: "20px",
              textDecoration: "none",
              textAlign: "center",
            }}
            to="/login"
            variant="body2"
          >
            already have one?
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
