import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Details from "./components/Details";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
