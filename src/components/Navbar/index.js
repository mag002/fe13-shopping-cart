import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
  Button,
  Box,
  Badge
} from "@material-ui/core";
import { connect } from "react-redux";

function Navbar(props) {
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
              <Badge badgeContent={props.cartTotal} color="primary">
                <Link style={style} to="/cart">
                  Cart
                </Link>
              </Badge>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    cartTotal: state.cart.reduce(function(total, item) {
      return (total = total + Number(item.quantity));
    }, 0)
  };
};
export default connect(mapStateToProps)(Navbar);
