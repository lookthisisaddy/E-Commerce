import Cart from "customer/components/cart/Cart";
import Checkout from "customer/components/checkout/Checkout";
import Footer from "customer/components/footer/Footer";
import Navigation from "customer/components/navigation/Navigation";
import Order from "customer/components/order/Order";
import OrderDetails from "customer/components/order/OrderDetails";
import Product from "customer/components/product/Product";
import ProductDetails from "customer/components/product_details/ProductDetails";
import HomePage from "customer/pages/home_page/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
