import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  )?.isAdmin;
  console.log(admin);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background?.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <Box sx={{ display: "flex", height: "57px", paddingTop: "50px" }}>
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack sx={{}}>
          <Box
            sx={{
              position: { xs: "absolute", md: "" },
              top: { xs: "1.2%", md: "5.5%" },
              margin: { xs: "11px", md: "" },
            }}
          >
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ fontFamily: "Rubik", display: { xs: "none", md: "flex" } }}
        >
          <Typography
            sx={{
              margin: "30px",
              fontFamily: "Rubik",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </Typography>

          <Typography
            sx={{
              margin: "30px",
              fontFamily: "Rubik",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
              Shop
            </Link>
          </Typography>

          {admin && (
            <Typography
              sx={{
                margin: "30px",
                fontFamily: "Rubik",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "black" }}
              >
                Admin
              </Link>
            </Typography>
          )}
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FavoriteIcon sx={{ margin: "10px" }} />
              {!user ? (
                <Link to="/cart">
                  <IconButton disabled={false} aria-label="cart">
                    <StyledBadge badgeContent={0} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
              ) : (
                <Link to="/cart">
                  <IconButton disabled={false} aria-label="cart">
                    <StyledBadge
                      badgeContent={cart?.products?.length}
                      color="secondary"
                    >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
              )}
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
