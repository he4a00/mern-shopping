import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProducts } from "../../store/productsSlice";

const RelatedProducts = () => {
  const dispatch = useDispatch();
  const featuredProducts = useSelector(
    (state) => state.products.featuredProducts
  );
  const lodaing = useSelector((state) => state.lodaing);
  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

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
          {featuredProducts?.map((product, idx) => (
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
                  src={product.img}
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
                    left: { xs: "70px", md: "20px" },
                    top: { xs: "58%" },
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
                  <Link to={`/${product._id}`}>
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
                    {product.title}
                  </Typography>
                  <Typography sx={{ fontFamily: "Rubik", fontWeight: "bold" }}>
                    {"$" + product.price + ".00"}
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
