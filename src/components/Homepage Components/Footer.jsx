import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import logo from "../../img/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  const links = [
    { name: "About Us" },
    { name: "About Our Shop" },
    { name: "Secure Shopping" },
    { name: "Delivery Information" },
    { name: "Privacy Poilcy" },
    { name: " Our Sitemap" },
    { name: "About Us" },
    { name: "About Us" },
  ];
  return (
    <Box sx={{ paddingBottom: "150px", background: "#F3F6FA" }}>
      <Box sx={{ margin: "auto", width: "100%", maxWidth: "1128px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            margin: { xs: "40px", md: "0" },
          }}
        >
          <Stack sx={{ marginTop: "20px" }}>
            <Box>
              <img src={logo} alt="" />
            </Box>
            <Box>
              <Typography sx={{ marginTop: "10px", fontFamily: "Rubik" }}>
                Address: 60-49 Road 11378 New York
              </Typography>
              <Typography sx={{ marginTop: "10px", fontFamily: "Rubik" }}>
                Phone: +65 11.188.888
              </Typography>
              <Typography sx={{ marginTop: "10px", fontFamily: "Rubik" }}>
                Email: hello@colorlib.com
              </Typography>
            </Box>
          </Stack>
          <Stack>
            <Box sx={{}}>
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Useful Links
              </Typography>
            </Box>
            <Stack direction="row">
              <Box sx={{ marginTop: "20px" }}>
                {links.map((link, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "Rubik",
                      cursor: "pointer",
                      marginBottom: "5px",
                      fontSize: "13px",
                    }}
                  >
                    {link.name}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ marginTop: "20px", marginLeft: "20px" }}>
                {links.map((link, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "Rubik",
                      cursor: "pointer",
                      marginBottom: "5px",
                      fontSize: "13px",
                    }}
                  >
                    {link.name}
                  </Typography>
                ))}
              </Box>
            </Stack>
          </Stack>
          <Stack>
            <Box sx={{ marginTop: "20px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Rubik",
                }}
              >
                Join Our Newsletter Now
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                  fontSize: "13px",
                  fontFamily: "Rubik",
                }}
              >
                Get E-mail updates about our latest shop and special offers.
              </Typography>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
              <TextField
                sx={{ borderRadius: "0px" }}
                id="outlined-basic"
                label="ُEnter Your Email"
                variant="outlined"
              />
              <Button
                sx={{
                  padding: "10px",
                  borderRadius: "0",
                  color: "#fff",
                  width: { xs: "50px", md: "50px", lg: "50px" },
                  height: "55px",
                  backgroundColor: "#7fad39",
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#7fad39",
                  },
                }}
              >
                Submit
              </Button>
            </Box>

            <Box sx={{ marginTop: "30px" }}>
              <FacebookIcon
                sx={{
                  color: "#404040",
                  margin: "20px",
                  cursor: "pointer",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    color: "#7fad39",
                    transition: "all 0.5s ease",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  color: "#404040",
                  margin: "20px",
                  cursor: "pointer",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    color: "#7fad39",
                    transition: "all 0.5s ease",
                  },
                }}
              />
              <LinkedInIcon
                sx={{
                  color: "#404040",
                  margin: "20px",
                  cursor: "pointer",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    color: "#7fad39",
                    transition: "all 0.5s ease",
                  },
                }}
              />
              <PinterestIcon
                sx={{
                  color: "#404040",
                  margin: "20px",
                  cursor: "pointer",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    color: "#7fad39",
                    transition: "all 0.5s ease",
                  },
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
