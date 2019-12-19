import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Details from "./components/Details";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core";
import theme from "./commons/theme";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Products} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:masanpham" component={Details} />
          {/* HOC */}
          <Route path="/cart" component={Cart} />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
