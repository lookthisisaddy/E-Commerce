import React from "react";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/home_page/HomePage";
import Footer from "customer/components/footer/Footer";
import Product from "customer/components/product/Product";
import ProductDetails from "customer/components/product_details/ProductDetails";
import Cart from "customer/components/cart/Cart";
import Checkout from "customer/components/checkout/Checkout";
import Order from "customer/components/order/Order";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "routers/CustomerRouters";
import OrderDetails from "customer/components/order/OrderDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
