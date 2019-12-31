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
  cart: [
    {
      id: 0,
      name: "Ao Ba lo",
      price: 22.5,
      size: "S",
      quantity: "2"
    },
    {
      id: 0,
      name: "Ao Ba lo",
      price: 22.5,
      size: "S",
      quantity: "2"
    },
    {
      id: 0,
      name: "Ao Ba lo",
      price: 22.5,
      size: "S",
      quantity: "2"
    }
  ]
};
const rootReducer = (state = initState, action) => {
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
