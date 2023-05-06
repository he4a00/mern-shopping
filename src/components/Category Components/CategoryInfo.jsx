import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useParams } from "react-router-dom";

// api imports

import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../store/productsSlice";

const CategoryInfo = () => {
  // api functions

  const { category } = useParams();

  const [selectedCategory, setSelectedCategory] = useState(category);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchProductsByCategory(selectedCategory));
  }, [dispatch, selectedCategory]);

  const sidebarLinks = [
    { name: "Fresh Meat" },
    { name: "Vegetables" },
    { name: "Fruits" },
    { name: "Ocean Foods" },
    { name: "Fastfood" },
    { name: "Fresh Bananas" },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };
  return (
    <Box sx={{ paddingBottom: "200px", paddingTop: "100px" }}>
      <Box sx={{ maxWidth: "1128px", margin: "auto", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: { xs: "20px", md: "0" },
            }}
          >
            <Typography sx={{ fontFamily: " Rubik" }}>Sort By</Typography>
            <FormControl sx={{ m: 1, minWidth: 90 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Select
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectedCategory}
                onChange={handleChange}
                autoWidth
                label="Category"
              >
                {sidebarLinks.map((link, index) => (
                  <MenuItem key={index} value={link.name}>
                    {link.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              onClick={() => setSelectedCategory("")}
              sx={{ fontFamily: "Rubik", cursor: "pointer" }}
            >
              Reset
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: { xs: "20px", md: "0" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Rubik",
                fontWeight: "bold",
              }}
            >
              {products.length}
            </Typography>
            <Typography sx={{ fontFamily: "Rubik", marginLeft: "9px" }}>
              Products Found
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: { xs: "20px", md: "0" },
            }}
          >
            <WidgetsIcon
              sx={{
                color: "#b2b2b2",
                margin: "10px",
                cursor: "pointer",
                transition: "all 0.5s ease",
                "&:hover": {
                  color: "#7fad39",
                  transition: "all 0.5s ease",
                },
              }}
            />
            <ListIcon
              sx={{
                color: "#b2b2b2",
                margin: "10px",
                cursor: "pointer",
                transition: "all 0.5s ease",
                "&:hover": {
                  color: "#7fad39",
                  transition: "all 0.5s ease",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Grid container spacing={4}>
            {products &&
              products.map((product, idx) => (
                <Grid key={idx} item xs={12} md={3} sm={6}>
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
                      <Typography
                        sx={{ fontFamily: "Rubik", fontWeight: "bold" }}
                      >
                        {"$" + product.price + ".00"}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryInfo;
