import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Slider.css";
import { Link } from "react-router-dom";
const ProductsSlider = () => {
  const images = [
    {
      name: "All",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895496552128533/cat-1.jpg",
    },
    {
      name: "Fastfood",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1099232551689789450/product-5.jpg",
    },
    {
      name: "VEGETABLES",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895497084805201/cat-3.jpg",
    },
    {
      name: "Fruits",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1099232509440577536/product-12.jpg",
    },
    {
      name: "Meat",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895497609105448/cat-5.jpg",
    },
  ];

  return (
    <Box
      sx={{ paddingTop: "250px", marginTop: { sm: "350px", md: "0", xs: "0" } }}
    >
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",
          width: "100%",
          display: "flex",
        }}
      >
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
          {images.map((image, index) => (
            <Box sx={{ display: "block" }}>
              <SwiperSlide key={index}>
                <img src={image.images} alt="" />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7fad39",
                    height: "40px",
                    width: "140px",
                    borderRadius: "8px",
                    margin: "10px",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/category/${image.name}`}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        fontFamily: "Rubik",
                        cursor: "pointer",
                      }}
                    >
                      {image.name}
                    </Typography>
                  </Link>
                </Box>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ProductsSlider;
