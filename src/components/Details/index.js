import React from "react";
import axios from "axios";
import {
  CircularProgress,
  Box,
  Grid,
  Typography,
  Paper,
  Button
} from "@material-ui/core";
export default class Details extends React.Component {
  state = {
    product: {},
    loading: true
  };
  componentDidMount() {
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
    // GOIJ API lay thong tin 1 san pham dua vao id
  }
  render() {
    const { src, id, name, size, price } = this.state.product;
    return (
      <div>
        {this.state.loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80vh"
            width="100vw"
          >
            <CircularProgress size={40} />
          </Box>
        ) : (
          //giao dien
          <Box mx="auto" width="80vw">
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
                    {size.map(s => {
                      return (
                        <Box
                          height="30px"
                          width="30px"
                          borderRadius="15px"
                          boxShadow={4}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          marginRight="10px"
                        >
                          {s}
                        </Box>
                      );
                    })}
                  </Box>
                  <h1>- INPUT NUMBER +</h1>
                  <Button variant="contained" color="primary">
                    Add to Cart
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
