import { Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flex: "5" }}>
      <Box>
        <Sidebar />
      </Box>
      <Typography>dsa</Typography>
    </Box>
  );
};

export default Home;
