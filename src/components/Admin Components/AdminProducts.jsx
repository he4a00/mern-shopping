import {
  Box,
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
import { deleteProduct, fetchAllProducts } from "../../store/productsSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [productsList, setProductsList] = useState(products);
  const [searchResults, setSearchResults] = useState("");
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(productId)).then((result) => {
          if (result.payload) {
            Swal.fire({
              icon: "success",
              title: `${result.payload.title} Removed Successfully`,
              showConfirmButton: false,
              timer: 3500,
            });
            setProductsList((prevProducts) =>
              prevProducts.filter(
                (product) => product._id !== result.payload._id
              )
            );
          } else {
            Swal.fire({
              icon: "error",
              title: "something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchResults(query);
    const filteredProducts = products.filter((product) => {
      const { title, category } = product;
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        category.toLowerCase().includes(query.toLowerCase())
      );
    });
    setProductsList(filteredProducts);
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
          <Typography variant="h5" sx={{ fontFamily: "Rubik" }}>
            Products List
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
            {productsList.length} Products Found
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
                  <TableCell>Image</TableCell>
                  <TableCell align="right">ID </TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Color</TableCell>
                  <TableCell align="right">Size</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsList.map((product) => (
                  <TableRow
                    key={product._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        style={{ borderRadius: "50%", width: "100px" }}
                        src={product.img}
                      />
                    </TableCell>
                    <TableCell align="right">{product._id}</TableCell>
                    <TableCell align="right">{product.title}</TableCell>
                    <TableCell align="right">{product.category}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.color}</TableCell>
                    <TableCell align="right">{product.size}</TableCell>
                    <TableCell align="right">
                      <Box sx={{ margin: "10px" }}>
                        <Link to={`/admin/products/${product._id}`}>
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
                          onClick={() => handleDelete(product._id)}
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

export default Products;
