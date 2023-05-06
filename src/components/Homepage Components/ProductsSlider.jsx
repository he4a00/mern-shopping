import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

const ProductsSlider = () => {
  const images = [
    {
      name: "DRIED FRUIT",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895496552128533/cat-1.jpg",
    },
    {
      name: "DRINK FRUIT",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895496824770560/cat-2.jpg",
    },
    {
      name: "VEGETABLES",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895497084805201/cat-3.jpg",
    },
    {
      name: "DRIED FRUIT",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895497332260864/cat-4.jpg",
    },
    {
      name: "DRIED FRUIT",
      images:
        "https://media.discordapp.net/attachments/1098895428772184144/1098895497609105448/cat-5.jpg",
    },
  ];

  const alertName = (name) => {
    alert(name);
  };
  return (
    <Box
      sx={{ paddingTop: "250px", marginTop: { sm: "350px", md: "0", xs: "0" } }}
    >
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",
          widht: "100%",
          display: "flex",
        }}
      >
        <Carousel
          show={3.5}
          responsive={false}
          transition={0.5}
          swiping={true}
          infinite={true}
        >
          {images.map((image, index) => (
            <Box sx={{}}>
              <img src={image.images} alt="" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#7fad39",
                  height: "40px",
                  margin: "10px",
                }}
              >
                <Typography
                  onClick={() => alertName(image.name)}
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontFamily: "Rubik",
                    cursor: "pointer",
                  }}
                >
                  {image.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default ProductsSlider;
