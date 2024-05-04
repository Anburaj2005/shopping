import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
// import Cart from "./containers/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       <Routes>
       <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          {/* <Route path="/cart" element={<Cart/>} /> */}
          <Route>404 Not Found!</Route>
       </Routes>
       
      
      </BrowserRouter>
    </div>
  );
}

export default App;