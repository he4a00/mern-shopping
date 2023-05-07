import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/productsSlice";
import Swal from "sweetalert2";

const AddNewProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [inStock, setInStock] = useState(true);
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");

  const loading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        title,
        desc,
        color,
        size,
        img,
        inStock,
        category,
        price,
      })
    ).then((result) => {
      if (result.payload) {
        Swal.fire({
          icon: "success",
          title: `${result.payload.title} Added Successfully`,
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
    });
  };

  return (
    <Box sx={{ display: "flex", flex: "5" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Box sx={{ padding: "30px" }}>
          <Typography variant="h5" sx={{ fontFamily: "Rubik", margin: "30px" }}>
            Add New Product
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
              label="Product Name"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ width: "600px", margin: "60px" }}
            />
            <TextField
              id="outlined-basic"
              label="Category"
              variant="outlined"
              sx={{ width: "600px", margin: "60px" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              sx={{ width: "600px", margin: "60px" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              sx={{ width: "600px", margin: "60px" }}
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Size"
              variant="outlined"
              sx={{ width: "600px", margin: "60px" }}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Color"
              variant="outlined"
              sx={{ width: "600px", margin: "60px" }}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              sx={{ width: "600px", margin: "60px" }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="In Stock"
              variant="outlined"
              sx={{ width: "600px", margin: "60px" }}
              value={inStock}
              onChange={(e) => setInStock(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                padding: "10px",
                borderRadius: "0",
                color: "#fff",
                width: "300px",
                marginLeft: "55px",
                fontFamily: "Rubik",
                fontWeight: "bold",
              }}
            >
              Add Product
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AddNewProduct;
