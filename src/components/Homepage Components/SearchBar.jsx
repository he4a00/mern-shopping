import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "50px",
        paddingTop: "50px",
        paddingBottom: { xs: "500px", md: "0" },
        marginLeft: { md: "30px", xs: "10px" },
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
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ border: "1px solid #b2b2b2" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "2px",
                height: "60%",
                backgroundColor: "#b2b2b2",
                right: "-25px",
              },
            }}
          >
            <Typography
              sx={{
                padding: "15px",
                fontFamily: "Rubik",
                display: { xs: "none", md: "block" },
                fontWeight: "bold",
              }}
            >
              All Categories{" "}
              <ArrowDropDownIcon
                sx={{ position: "absolute", top: "18px", right: "-14px" }}
              />
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: { lg: "30px", md: "30px", xs: "0" },
              height: "55px",
            }}
          >
            {/* <Input
              placeholder="What do you need?"
              sx={{
                margin: "10px",
                fontFamily: "Rubik",
                width: { xs: "150px", md: "250px" },
              }}
            /> */}

            {/* <TextField
              sx={{ backgroundColor: "transparent" }}
              id="outlined-basic"
              label="What do you want?"
              variant="filled"
            /> */}

            <input
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "15px",
                fontSize: "16px",
                color: "#333",
                borderRadius: "4px",
                boxSizing: "border-box",
                outline: "none",
                fontSize: "17px",
                fontFamily: "Rubik",
              }}
              placeholder="What do you need?"
            />

            <Button
              sx={{
                padding: "10px",
                borderRadius: "0",
                color: "#fff",
                width: "100px",
                height: "55px",
                backgroundColor: "#7fad39",
                fontFamily: "Rubik",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#7fad39",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default SearchBar;
