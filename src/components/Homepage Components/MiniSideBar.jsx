import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const MiniSideBar = () => {
  const sidebarLinks = [
    { name: "Fresh Meat" },
    { name: "Vegetables" },
    { name: "Fruits" },
    { name: "Ocean Foods" },
    { name: "Fastfood" },
    { name: "Fresh Bananas" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "57px",
        paddingTop: "50px",
        justifyContent: { xs: "center", md: "space-between" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            marginLeft: { xs: "11px", md: "0" },
          }}
        >
          <Stack direction="column">
            <Button
              onClick={() => toggleSideBar()}
              sx={{
                padding: "10px",
                borderRadius: "0",
                color: "#fff",
                width: { xs: "300px", md: "250px", lg: "250px" },
                backgroundColor: "#7fad39",
                fontFamily: "Rubik",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#7fad39",
                },
              }}
            >
              <MenuIcon sx={{ fontSize: "20px", margin: "10px" }} />
              All departments
              <ArrowDropDownIcon sx={{ fontSize: "20px", margin: "10px" }} />
            </Button>
            <Box
              sx={{
                border: "1px solid #b2b2b2",
                opacity: 0.8,
                display: isOpen ? "block" : "none",
                backgroundColor: "#fff",
                zIndex: 1,
              }}
            >
              {sidebarLinks.map((link, idx) => (
                <Link
                  to={`/category/${link.name}`}
                  style={{
                    color: "black",
                    fontFamily: "Rubik",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    key={idx}
                    sx={{ margin: "15px", fontFamily: "Rubik" }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default MiniSideBar;
