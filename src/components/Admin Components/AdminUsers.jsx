import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers } from "../../store/userSlice";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [usersList, setUsersList] = useState(users);
  const [searchResults, setSearchResults] = useState("");
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const handleDelete = (userId) => {
    // Make a request to get the cart ID based on the user ID

    Swal.fire({
      title: "Are you sure?",
      text: "The user cart also wil be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(userId)).then((userResult) => {
          if (userResult.payload) {
            setUsersList((prevUsers) =>
              prevUsers.filter((user) => user._id !== userResult.payload._id)
            );
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error deleting user",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchResults(query);
    const filteredUsers = users.filter((user) => {
      const { username } = user;
      return username.toLowerCase().includes(query.toLowerCase());
    });
    setUsersList(filteredUsers);
  };

  return (
    <Box sx={{ display: "flex", flex: "5" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ padding: "30px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontFamily: "Rubik", color: "red", margin: "10px" }}
            >
              BIG NOTE
            </Typography>
            <Typography
              sx={{ fontFamily: "Rubik", color: "red", margin: "10px" }}
            >
              MAKE SURE , after you delete the user from the admin panel , don't
              forget to delete the cart right after ..{" "}
            </Typography>
            <Typography
              sx={{ fontFamily: "Rubik", color: "red", margin: "10px" }}
            >
              {" "}
              because i'm too lazy to do it{" "}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Rubik", textAlign: "center" }}
          >
            Users List
          </Typography>
        </Box>
        <Box sx={{ margin: "30px" }}>
          <TextField
            sx={{ width: "500px" }}
            id="outlined-basic"
            label="Search ..."
            variant="outlined"
            value={searchResults}
            onChange={handleSearch}
          />
          <Typography
            sx={{ fontFamily: "Rubik", margin: "20px", textAlign: "center" }}
          >
            {usersList.length} Users Found
          </Typography>
        </Box>

        <Box sx={{}}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID </TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Admin</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersList.map((user) => (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{user._id}</TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">
                      {user.isAdmin ? "True" : "False"}
                    </TableCell>

                    <TableCell align="right">
                      <Box sx={{ margin: "10px" }}>
                        <Link to={`/admin/users/${user._id}`}>
                          <EditIcon
                            sx={{
                              marginRight: "40px",
                              marginLeft: "30px",
                              cursor: "pointer",
                              color: "green",
                            }}
                          />
                        </Link>
                        <DeleteIcon
                          onClick={() => handleDelete(user._id)}
                          sx={{ cursor: "pointer", color: "red" }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminUsers;
