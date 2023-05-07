import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Sales.css";

// import required modules
import { Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchFeaturedProducts } from "../../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const Sales = () => {
  const dispatch = useDispatch();
  const featuredProducts = useSelector(
    (state) => state.products.featuredProducts
  );
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
    <Box
      sx={{
        paddingTop: "100px",
        paddingBottom: "50px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          width: "100%",
          maxWidth: "1128px",
          paddingBottom: "70px",
          borderBottom: "1px solid #ecdcdc",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              margin: "20px",
              fontFamily: "Rubik",
              fontWeight: "bold",
              position: "relative",
              display: "inline-block",
              width: "fit-content",
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
            Sale Off
          </Typography>
        </Box>

        <Swiper
          slidesPerView={9}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {featuredProducts.map((sale, idx) => (
            <SwiperSlide key={idx}>
              <Box
                sx={{
                  position: "relative",
                  cursor: "pointer",
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
                  src={sale.img}
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
                    left: { xs: "17px" },
                    top: { xs: "60%" },
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
                  <Link to={`/${sale._id}`}>
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
                <Box sx={{ margin: "20px" }}>
                  <Typography sx={{ fontFamily: "Rubik", opacity: "0.6" }}>
                    {sale.category}
                  </Typography>
                  <Typography sx={{ fontFamily: "Rubik" }}>
                    {sale.name}
                  </Typography>
                  <Typography sx={{ fontFamily: "Rubik", fontWeight: "bold" }}>
                    {"$" + sale.price + ".00"}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Sales;
