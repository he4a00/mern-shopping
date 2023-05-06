import React from "react";
import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Announcement = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      padding: "0 4px",
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { label: "Home" },
    { label: "Shop" },
    { label: "Pages" },
    { label: "Blog" },
    { label: "Contact" },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: { xs: "none", md: "#f5f5f5" },
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
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
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              position: "relative",
            }}
          >
            <EmailIcon sx={{ fontSize: "20px" }} />
            <Typography
              sx={{
                fontFamily: "Rubik",
                margin: "10px",
                fontSize: "12px",
              }}
            >
              he4a0001@gmail.com
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Rubik",
                position: "relative",
                marginLeft: "30px",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  backgroundColor: "#000000",
                  width: "1px",
                  opacity: 0.5,
                  height: "100%",
                  left: "-20px",
                },
              }}
            >
              {" "}
              Free Shipping for all Order of $99
            </Typography>
          </Box>
          <Box>
            {user && (
              <Typography sx={{ fontFamily: "Rubik" }}>
                Hello, {user.username}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  backgroundColor: "#000000",
                  width: "1px",
                  opacity: 0.5,
                  height: "60%",
                  right: "-5px",
                },
              }}
            >
              <FacebookIcon
                sx={{
                  fontSize: "17px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: "17px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
              <LinkedInIcon
                sx={{
                  fontSize: "17px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
              <PinterestIcon
                sx={{
                  fontSize: "17px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {user ? (
                <Button
                  sx={{
                    padding: "10px",
                    borderRadius: "0",
                    color: "#fff",
                    width: "100px",
                    height: "45px",
                    marginLeft: "30px",
                    backgroundColor: "#7fad39",
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#7fad39",
                    },
                  }}
                  onClick={handleLogOut}
                >
                  Log Out
                </Button>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", ml: "20px" }}>
                  <Person2SharpIcon sx={{ fontSize: "20px", mr: "5px" }} />
                  <Link
                    to="/login"
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "13px",
                      fontWeight: 500,
                      marginRight: "20px",
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Link>
                  <Person2SharpIcon sx={{ fontSize: "20px", mr: "5px" }} />
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontFamily: "Rubik",
                        fontSize: "13px",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      Register
                    </Typography>
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, marginTop: "55px" }}
          size="large"
          color="inherit"
          onClick={() => toggleNav()}
        >
          <MenuIcon
            sx={{ border: "1px solid black", width: "42px", height: "40px" }}
          />
        </IconButton>
      </Box>

      {/* Mobile Menu */}

      <Box
        sx={{
          position: "fixed",
          top: "0",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#f5f5f5",
          zIndex: 1000,
          display: { xs: isOpen ? "block" : "none", md: "none" },
        }}
      >
        <CloseIcon onClick={() => toggleNav(false)} />

        <Box sx={{ padding: "50px" }}>
          <img src={logo} alt="" />
        </Box>

        {/* Cart And Fav Icons */}

        <Box sx={{ marginLeft: "50px", display: "flex", alignItems: "center" }}>
          <FavoriteIcon sx={{ margin: "10px" }} />

          {!user ? (
            <IconButton disabled={true} aria-label="cart">
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
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

        {/* Login And Register */}

        {user ? (
          <Box>
            <Button
              sx={{
                padding: "10px",
                borderRadius: "0",
                color: "#fff",
                width: "100px",
                height: "45px",
                marginLeft: "30px",
                backgroundColor: "#7fad39",
                fontFamily: "Rubik",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#7fad39",
                },
              }}
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "60px",
              paddingTop: "10px",
            }}
          >
            <Person2SharpIcon sx={{ fontSize: "20px", mr: "5px" }} />
            <Link
              to="/login"
              style={{
                fontFamily: "Rubik",
                fontSize: "13px",
                fontWeight: 500,
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
            <Person2SharpIcon sx={{ fontSize: "20px", mr: "5px" }} />
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Register
              </Typography>
            </Link>
          </Box>
        )}

        <List sx={{ padding: "0 10px", top: "10px" }}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{ padding: "10px 0", borderBottom: "1px solid #d5d5d5" }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>

        {/* Social Icons */}

        <Box sx={{ marginLeft: "50px", paddingTop: "30px" }}>
          <FacebookIcon
            sx={{
              fontSize: "17px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: "17px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
          <LinkedInIcon
            sx={{
              fontSize: "17px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
          <PinterestIcon
            sx={{
              fontSize: "17px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
        </Box>

        {/* Email And Info  */}

        <Box
          sx={{
            alignItems: "center",
            position: "relative",
            marginLeft: "50px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Rubik",
              marginTop: "35px",
              fontSize: "12px",
            }}
          >
            he4a0001@gmail.com
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "Rubik",
              position: "relative",
            }}
          >
            {" "}
            Free Shipping for all Order of $99
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Announcement;
