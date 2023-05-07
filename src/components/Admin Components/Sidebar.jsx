import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flex: "1" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: { sm: 240 },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { sm: 240 },
            boxSizing: "border-box",
            bgcolor: "#242424",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <List sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              px: 2,
              color: "#fff",
              fontFamily: "Rubik",
            }}
          >
            Products
          </Typography>
          <ListItem button sx={{ mb: 1 }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                width: "100%",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
              to="/admin/products"
            >
              <ListItemButton>
                <ListItemIcon>
                  <Inventory2Icon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography sx={{ fontFamily: "Rubik" }}>
                  Products List
                </Typography>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem button sx={{ mb: 1 }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                width: "100%",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
              to="/products/add"
            >
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography sx={{ fontFamily: "Rubik" }}>
                  Add Product
                </Typography>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>

        {/* User Things  */}

        <List sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              px: 2,
              color: "#fff",
              fontFamily: "Rubik",
            }}
          >
            Users
          </Typography>
          <ListItem button sx={{ mb: 1 }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                width: "100%",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
              to="/admin/users"
            >
              <ListItemButton>
                <ListItemIcon>
                  <Inventory2Icon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography sx={{ fontFamily: "Rubik" }}>Users List</Typography>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>

        {/* Cart Things */}

        <List sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              px: 2,
              color: "#fff",
              fontFamily: "Rubik",
            }}
          >
            Carts
          </Typography>
          <ListItem button sx={{ mb: 1 }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                width: "100%",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
              to="/admin/carts"
            >
              <ListItemButton>
                <ListItemIcon>
                  <Inventory2Icon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography sx={{ fontFamily: "Rubik" }}>Carts List</Typography>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
