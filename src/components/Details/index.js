import React from "react";
import axios from "axios";
import {
  CircularProgress,
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";
class Details extends React.Component {
  state = {
    product: {},
    loading: true,
    size: "",
    quantity: 0
  };
  handleClickAddToCart = () => {
    if (this.props.type !== "cart") {
      this.props.addToCart({
        id: this.state.product.id,
        name: this.state.product.name,
        price: this.state.product.price,
        size: this.state.size,
        quantity: this.state.quantity,
        src: this.state.product.src
      });
    } else {
      this.props.removeFromCart(this.state.product.id);
    }
  };
  handleSelectSize = event => {
    this.setState({ size: event.target.value });
  };
  handleChangeQuantity = event => {
    if (this.props.type === "cart") {
      if (Number(event.target.value) === 0) {
        return this.props.removeFromCart(this.state.product.id);
      }
      this.props.updateCartItem(this.state.product.id, event.target.value);
    }
    this.setState({ quantity: event.target.value });
  };
  componentDidMount() {
    if (this.props.type !== "cart") {
      axios
        .get(
          `https://kmin-academy-shopping-cart-api.herokuapp.com/products/${this.props.match.params.masanpham}`
        )
        .then(res => {
          console.log(res);
          this.setState({ product: res.data, loading: false });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({
        product: this.props.product,
        size: this.props.size,
        quantity: this.props.quantity,
        loading: false
      });
    }
    // GOIJ API lay thong tin 1 san pham dua vao id
  }
  render() {
    const { src, id, name, size, price } = this.state.product;
    return (
      <div>
        {this.state.loading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress size={40} />
          </Box>
        ) : (
          //giao dien
          <Box mx="auto" width="100%">
            <Grid container spacing={5}>
              <Grid item xs={3}>
                <Box boxShadow={3}>
                  <img src={src} style={{ maxWidth: "100%" }} />
                </Box>
              </Grid>

              <Grid item xs={9}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  height="100%"
                >
                  <Typography variant="h3" color="secondary">
                    {name}
                  </Typography>
                  <Typography color="primary" variant="h4">
                    {price}$
                  </Typography>
                  <Box display="flex">
                    {this.props.type !== "cart" ? (
                      size.map(s => {
                        return (
                          <label>
                            <input
                              type="radio"
                              name="sizes"
                              style={{
                                height: "30px",
                                width: "30px",
                                borderRadius: "15px",
                                boxShadow: "0 0 25px rbga(0,0,0,0.16)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "10px"
                              }}
                              value={s}
                              onChange={this.handleSelectSize}
                            />
                            {s}
                          </label>
                        );
                      })
                    ) : (
                      <label>
                        <input
                          type="radio"
                          name="sizes"
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "15px",
                            boxShadow: "0 0 25px rbga(0,0,0,0.16)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "10px"
                          }}
                          value={size}
                          onChange={this.handleSelectSize}
                        />
                        {size}
                      </label>
                    )}
                  </Box>

                  <Box width="200px" my={3}>
                    <TextField
                      defaultValue={this.props.quantity || 1}
                      type="number"
                      onChange={this.handleChangeQuantity}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickAddToCart}
                  >
                    {this.props.type !== "cart" ? "Add to Cart" : "Remove"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </div>
    );
  }
}
const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch({ type: "ADD_TO_CART", payload: product }),
    removeFromCart: id => dispatch({ type: "REMOVE_FROM_CART", payload: id }),
    updateCartItem: (id, quantity) =>
      dispatch({ type: "UPDATE_CART_ITEM", payload: { id, quantity } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
