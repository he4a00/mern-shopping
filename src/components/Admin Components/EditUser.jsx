import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/userSlice";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const EditUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const loading = useSelector((state) => state.users.loading);
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user._id === userId);
  const [username, setUsername] = useState(user?.username);
  const [isAdmin, setIsAdmin] = useState(Boolean(user?.isAdmin));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      username,
      isAdmin,
    };
    dispatch(updateUser({ newUserData, userId }))
      .then((result) => {
        if (result.payload) {
          Swal.fire({
            icon: "success",
            title: `${result.payload.username} Updated Successfully`,
            showConfirmButton: false,
            timer: 3500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setIsAdmin(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flex: "5" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Box sx={{ padding: "30px" }}>
          <Typography variant="h5" sx={{ fontFamily: "Rubik", margin: "30px" }}>
            Edit User
          </Typography>
        </Box>
        <Box>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ width: "600px", margin: "60px" }}
            />
            <FormControl sx={{ width: "100px", margin: "55px" }}>
              <InputLabel id="demo-simple-select-label">Admin</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={isAdmin}
                label="Admin"
                onChange={handleChange}
              >
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                height: "40px",
                borderRadius: "0",
                color: "#fff",
                marginLeft: "55px",
                fontFamily: "Rubik",
                fontWeight: "bold",
                margin: "50px",
              }}
            >
              Update User
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EditUser;
