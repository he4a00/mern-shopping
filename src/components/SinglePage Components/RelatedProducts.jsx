import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  const products = [
    {
      name: "DRIED FRUIT",
      images:
        "https://cdn.discordapp.com/attachments/1098895428772184144/1099232508039675954/product-6.jpg",
      price: "$30",
    },

    {
      name: "DRIED FRUIT",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1099232508354244688/product-7.jpg",
      price: "$30",
    },

    {
      name: "DRIED FRUIT",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1099232508563963934/product-8.jpg",
      price: "$30",
    },

    {
      name: "DRIED FRUIT",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1099232508786257931/product-9.jpg",
      price: "$30",
    },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };
  return (
    <Box sx={{ paddingTop: "200px", paddingBottom: "100px" }}>
      <Box sx={{ maxWidth: "1128px", margin: "auto", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              margin: "20px",
              fontFamily: "Rubik",
              fontWeight: "bold",
              position: "relative",
              display: "inline-block",
              width: "fit-content",
              justifyContent: "center",
              "&::after": {
                position: "absolute",
                content: '""',
                display: "block",
                bottom: "-5px",
                height: "5px",
                width: "100%",
                backgroundColor: "green",
              },
            }}
          >
            Related Products
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {products.map((product, idx) => (
            <Grid item xs={12} md={3} sm={6}>
              <Box
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  "&:hover .product-img": {
                    transform: "scale(1.2)",
                  },
                  "&:hover .product-details": {
                    opacity: 1,
                    bottom: "10px",
                  },
                }}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <img
                  src={product.images}
                  style={{
                    backgroundColor: "#f7f7f7",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform .3s ease",
                  }}
                />

                <Box
                  sx={{
                    dispaly: "flex",
                    position: "absolute",
                    left: "20px",
                  }}
                >
                  <ShoppingCartIcon
                    variant="subtitle2"
                    sx={{
                      position: "absolute",
                      bottom: "50px",
                      left: "0",
                      right: "0",
                      opacity: hoveredIdx === idx ? 1 : 0,
                      transition: "all .3s ease",
                      borderRadius: "50%",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#fff",
                      margin: "10px",
                      "&:hover": {
                        rotate: "360deg",
                        transition: "all 0.5s ease",
                        color: "#fff",
                        backgroundColor: "green",
                      },
                    }}
                  />

                  <FavoriteIcon
                    variant="subtitle2"
                    sx={{
                      position: "absolute",
                      bottom: "50px",
                      left: "80px",
                      right: "0",
                      opacity: hoveredIdx === idx ? 1 : 0,
                      transition: "all .3s ease",
                      backgroundColor: "#fff",
                      padding: "10px",
                      borderRadius: "50%",
                      margin: "10px",
                      "&:hover": {
                        rotate: "360deg",
                        transition: "all 0.5s ease",
                        color: "#fff",
                        backgroundColor: "green",
                      },
                    }}
                  />
                  <Link to="/">
                    <RemoveRedEyeIcon
                      variant="subtitle2"
                      sx={{
                        position: "absolute",
                        bottom: "50px",
                        left: "160px",
                        right: "0",
                        opacity: hoveredIdx === idx ? 1 : 0,
                        transition: "all .3s ease",
                        backgroundColor: "#fff",
                        padding: "10px",
                        borderRadius: "50%",
                        margin: "10px",
                        "&:hover": {
                          rotate: "360deg",
                          transition: "all 0.5s ease",
                          color: "#fff",
                          backgroundColor: "green",
                        },
                      }}
                    />
                  </Link>
                </Box>
                <Box
                  sx={{
                    margin: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontFamily: "Rubik", opacity: "0.6" }}>
                    {product.name}
                  </Typography>
                  <Typography sx={{ fontFamily: "Rubik", fontWeight: "bold" }}>
                    {product.price}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RelatedProducts;
