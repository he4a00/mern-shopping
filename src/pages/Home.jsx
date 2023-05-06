import React from "react";
import { Box, Stack } from "@mui/material";
import Announcement from "../components/Homepage Components/Announcement";
import Navbar from "../components/Homepage Components/Navbar";
import MiniSideBar from "../components/Homepage Components/MiniSideBar";
import SearchBar from "../components/Homepage Components/SearchBar";
import Info from "../components/Homepage Components/Info";
import Landing from "../components/Homepage Components/Landing";
import ProductsSlider from "../components/Homepage Components/ProductsSlider";
import FeaturedProducts from "../components/Homepage Components/FeaturedProducts";
import Bannners from "../components/Homepage Components/Bannners";
import Footer from "../components/Homepage Components/Footer";

const Home = () => {
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
      <Landing />
      <ProductsSlider />
      <FeaturedProducts />
      <Bannners />
      <Footer />
    </Box>
  );
};

export default Home;
