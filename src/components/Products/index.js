import React from "react";
import { Grid, Box, CircularProgress, Button } from "@material-ui/core";
import Product from "../Product";
import axios from "axios";
export default class Products extends React.Component {
  state = {
    products: [],
    page: 1,
    page_size: 6,
    desc: 0
    // split
  };
  handleChangePage = value => {
    this.setState({ page: value });
  };
  handleChangeDesc = value => {
    this.setState({ desc: value });
  };
  componentDidMount() {
    axios
      .get("https://kmin-academy-shopping-cart-api.herokuapp.com/products")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const pagination = [];
    for (
      let i = 0;
      i < Math.ceil(this.state.products.length / this.state.page_size);
      i++
    ) {
      pagination.push(
        <Button
          variant={this.state.page === i + 1 ? "contained" : "outlined"}
          color="primary"
          onClick={() => this.handleChangePage(i + 1)}
        >
          {i + 1}
        </Button>
      );
    }
    return (
      // class=row Bootstrap
      <Grid container>
        {/* class=col Bootstrap */}
        <Grid item md={3}>
          <Box boxShadow={1} minHeight="100vh" height="100%">
            <Button
              variant="contained"
              onClick={() => this.handleChangeDesc(1)}
            >
              Tang dan
            </Button>
            <Button
              variant="contained"
              onClick={() => this.handleChangeDesc(-1)}
            >
              Giam dan
            </Button>
          </Box>
        </Grid>
        <Grid item md={9}>
          <Box display="flex" flexWrap="wrap">
            <Grid container>
              {this.state.products.length > 0 ? (
                [...this.state.products]
                  .sort((a, b) => {
                    return this.state.desc * (a.price - b.price);
                  })
                  .splice(
                    (this.state.page - 1) * this.state.page_size,
                    this.state.page_size
                  )
                  .map(product => {
                    return (
                      <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                        imgSrc={product.src}
                      ></Product>
                    );
                  })
              ) : (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="80vh"
                  width="100vw"
                >
                  <CircularProgress size={40} />
                </Box>
              )}
            </Grid>
            <Box display="flex">{pagination}</Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
