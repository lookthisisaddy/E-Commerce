import React from "react";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/home_page/HomePage";
import Footer from "customer/components/footer/Footer";
import Product from "customer/components/product/Product";
import ProductDetails from "customer/components/product_details/ProductDetails";
import Cart from "customer/components/cart/Cart";
import Checkout from "customer/components/checkout/Checkout";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
