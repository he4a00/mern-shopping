import { Box, Stack } from "@mui/material";
import React from "react";
import Announcement from "../components/Homepage Components/Announcement";
import Navbar from "../components/Homepage Components/Navbar";
import MiniSideBar from "../components/Homepage Components/MiniSideBar";
import SearchBar from "../components/Homepage Components/SearchBar";
import Info from "../components/Homepage Components/Info";
import Sales from "../components/Shop Components/Sales";
import Footer from "../components/Homepage Components/Footer";
import Banners from "../components/Homepage Components/Bannners";
import Products from "../components/Shop Components/Products";
import Bannners from "../components/Homepage Components/Bannners";

const Shop = () => {
  return (
    <Box>
      <Announcement />
      <Navbar />
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            xs: "center",
          },
          alignItems: "center",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }}>
          <MiniSideBar />
          <SearchBar />
          <Info />
        </Stack>
      </Box>
      <Bannners />
      <Sales />
      <Products />
      <Footer />
    </Box>
  );
};

export default Shop;
