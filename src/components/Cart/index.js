import React from "react";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <h1>{props.cartPropsFromStore[0].name}</h1>
    </div>
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
