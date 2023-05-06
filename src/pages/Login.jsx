import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password })).then((result) => {
      if (result.payload) {
        navigate("/");
      } else if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Invalid Info , Try again",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // if (user) {
  //   return null;
  // }
  return (
    <Grid container justifyContent="center" sx={{ mt: 8 }}>
      {/* <Snackbar open={true} autoHideDuration={6000}>
          <Alert variant="filled" severity="error">
            <AlertTitle>Error</AlertTitle> Invalid Info{" --- "}
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Rubik",
              }}
            >
              Try Again
            </Link>
          </Alert> */}

      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={6} sx={{ p: 4 }}>
          <Grid container justifyContent="center">
            <Avatar sx={{ bgcolor: "primary.main" }}>L</Avatar>
          </Grid>
          <Typography variant="h5" align="center" sx={{ mt: 2, mb: 4 }}>
            Sign In
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
              disabled={loading}
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
          </form>
          <Box
            sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
          >
            <Link
              style={{
                fontFamily: "Rubik",
                margin: "20px",
                textDecoration: "none",
              }}
              align="center"
            >
              Forgot password?
            </Link>
            <Link
              style={{
                fontFamily: "Rubik",
                textDecoration: "none",
                cursor: "pointer",
              }}
              to="/register"
              align="center"
            >
              you don't have one?
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
