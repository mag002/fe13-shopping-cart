import React from "react";
import { connect } from "react-redux";
import Product from "../Product";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import Details from "../Details";
import CheckoutForm from "../CheckoutForm";

function Cart(props) {
  return (
    <Grid container>
      <Grid item md={8}>
        {props.cartPropsFromStore.map(item => {
          return (
            <Details
              type="cart"
              key={item.id}
              product={item}
              quantity={item.quantity}
              size={item.size}
            />
          );
        })}
      </Grid>
      <Grid item md={4}>
        <CheckoutForm
          totalPrice={props.cartPropsFromStore.reduce((total, item) => {
            return (total = total + item.price * item.quantity);
          }, 0)}
          totalValue={props.cartPropsFromStore.reduce((total, item) => {
            return (total = total + item.quantity);
          }, 0)}
          products={props.cartPropsFromStore}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    cartPropsFromStore: state.cart
  };
};
const mapDispatchToProps = null;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
