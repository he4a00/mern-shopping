import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
// api imports

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { fetchFeaturedProducts } from "../../store/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  // api functions
  const dispatch = useDispatch();
  const featuredProducts = useSelector(
    (state) => state.products.featuredProducts
  );
  const lodaing = useSelector((state) => state.lodaing);
  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  const categories = [
    { name: "All" },
    { name: "Fruits" },
    { name: "Fresh Meat" },
    { name: "Vegetables" },
    { name: "Fastfood" },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };
  return (
    <Box sx={{ paddingTop: "150px", paddingBottom: "100px" }}>
      <Box sx={{ margin: "auto", width: "100%", maxWidth: "1128px" }}>
        <Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: "Rubik",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  backgroundColor: "#7fad39",
                  width: "80px",
                  margin: "0 auto",
                  right: "0",
                  height: "4px",
                  bottom: "-15px",
                  left: "0",
                },
              }}
            >
              Featured Product
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "30px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {categories.map((category, idx) => (
              <Link
                style={{
                  color: "black",
                  fontFamily: "Rubik",
                  textDecoration: "none",
                }}
                to={`/category/${category.name}`}
              >
                <Typography
                  key={idx}
                  variant="h6"
                  sx={{
                    margin: "20px",
                    cursor: "pointer",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                  }}
                >
                  {category.name}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box>
            <Grid container spacing={4}>
              {featuredProducts.map((product, idx) => (
                <Grid item key={idx} xs={12} md={3} sm={6}>
                  <Grid container direction="column">
                    <Grid item>
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
                            left: "20px",
                            top: "60%",
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
                          <Typography
                            sx={{ fontFamily: "Rubik", opacity: "0.6" }}
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            sx={{ fontFamily: "Rubik", fontWeight: "bold" }}
                          >
                            {"$" + product.price + ".00"}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
