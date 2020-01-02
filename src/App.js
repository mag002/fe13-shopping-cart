import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Details from "./components/Details";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core";
import theme from "./commons/theme";
import { createStore } from "redux";
import { Provider } from "react-redux";
const initState = {
  cart: []
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const indexOfProduct = state.cart.findIndex(ele => {
        return ele.id === action.payload.id;
      });
      // -1 hoac 0=>99999
      if (indexOfProduct >= 0) {
        const newCartState = [...state.cart];
        //copy mang state cart trong store
        newCartState[indexOfProduct].quantity =
          Number(newCartState[indexOfProduct].quantity) +
          Number(action.payload.quantity);
        return {
          ...state,
          cart: newCartState
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const newCartState = state.cart.filter(item => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        cart: newCartState
      };
    }
    case "UPDATE_CART_ITEM":{
      const newCartState = [...state.cart];
      const indexOfProduct = state.cart.findIndex(ele => {
        return ele.id === action.payload.id;
      });
      //copy mang state cart trong store
      newCartState[indexOfProduct].quantity =action.payload.quantity
      return {
        ...state,
        cart: newCartState
      };
    }
  }
  return state;
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Products} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:masanpham" component={Details} />
            {/* HOC */}
            <Route path="/cart" component={Cart} />
          </div>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
