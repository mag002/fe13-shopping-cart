import React from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";
//Doi voi func component
//style lai material ui component
//dung makeStyle(style)
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { minHeight } from "@material-ui/system";
import theme from "../../commons/theme";
//Doi voi class component
//style lai material ui component
//dung withStyle(style)(component)
const styles = {
  product: {
    "& img": {
      maxWidth: "100%",
      minHeight: "200px",

      width: "100%"
    }
  }
};
class Product extends React.Component {
  render() {
    const { name, price, imgSrc, id, classes } = this.props;
    return (
      <Grid item xs={4}>
        <Box className={classes.product} m={2} boxShadow={3}>
          <img src={imgSrc} />
          <Box p={3}>
            <Link to={`products/${id}`}>
              <Typography variant="h5" color="secondary">
                {name}
              </Typography>
            </Link>
            <Typography variant="h6">{price}$</Typography>
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" fullWidth>
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  }
}
export default withStyles(styles)(Product);
// hocFunction(component)=>NewComponent
