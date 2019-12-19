import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
  Button,
  Box
} from "@material-ui/core";
export default function Navbar() {
  const style = {
    textDecoration: "none",
    color: "black"
  };
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <img
            style={{ height: "50px" }}
            src="https://www.kmin.edu.vn/assets/[KMIN]_Logo_Design_02.png"
          />
          <Box ml="auto">
            <Button color="inherit">
              <Link style={style} to="/products">
                Products
              </Link>
            </Button>

            <Button>
              <Link style={style} to="/details">
                Details
              </Link>
            </Button>
            <Button>
              <Link style={style} to="/cart">
                Cart
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
