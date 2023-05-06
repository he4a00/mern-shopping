import { Box } from "@mui/material";
import React from "react";
import banner1 from "../../img/banner/banner-1.jpg";
import banner2 from "../../img/banner/banner-2.jpg";

const Bannners = () => {
  return (
    <Box sx={{ paddingTop: "150px", paddingBottom: "100px" }}>
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <img src={banner1} alt="" style={{ margin: "13px" }} />
        <img src={banner2} alt="" style={{ margin: "13px" }} />
      </Box>
    </Box>
  );
};

export default Bannners;
