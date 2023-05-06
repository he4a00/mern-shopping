import { Box, Button, Typography } from "@mui/material";
import React from "react";
import hero from "../../img/hero/banner.jpg";
import "./Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Box
        sx={{
          maxWidth: "560px",
          margin: "auto",
          widht: "100%",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Box sx={{ height: "300px" }}>
            <img className="landing-img" src={hero} alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "25%",
              top: { xs: "100%", md: "27%" },
              left: { sm: "25%", md: "35%" },
              margin: "60px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Rubik",
                fontSize: "15px",
                color: "#7fad39",
                fontWeight: "bold",
                letterSpacing: "3px",
              }}
            >
              FRUIT FRESH
            </Typography>
            <Typography
              variant="h2"
              sx={{
                marginTop: "30px",
                fontWeight: "bold",
                fontFamily: "Rubik",
                fontSize: { xs: "30px", md: "50px" },
              }}
            >
              Vegetable <br /> 100% Organic
            </Typography>

            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: "Rubik",
              }}
            >
              Free Pickup and Delivery Available
            </Typography>

            <Link to="/shop">
              <Button
                sx={{
                  padding: "10px",
                  borderRadius: "0",
                  color: "#fff",
                  width: { xs: "100px", md: "150px", lg: "150px" },
                  backgroundColor: "#7fad39",
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  marginTop: "30px",
                  "&:hover": {
                    backgroundColor: "#7fad39",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
