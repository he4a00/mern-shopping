import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Info = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        paddingTop: "50px",
        marginLeft: { lg: "120px", md: "100", xs: "0" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: { xs: "450px", md: "0" },
          marginRight: { xs: "0px", md: "0" },
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocalPhoneIcon sx={{ fontSize: "19px", color: "#7fad39" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Rubik",
                  fontSize: "15px",
                }}
              >
                01003687693
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontSize: "12px",
                }}
              >
                support 24/7 time
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Info;
