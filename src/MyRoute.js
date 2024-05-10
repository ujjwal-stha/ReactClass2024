import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Nav from "./redux/Nav";
// import SingleProduct from "./redux/SingleProduct";
// import ShowProduct from "./redux/ShowProduct";
// import Test from "./Test";
// import First from "./First";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Test />} />
        <Route path="/demo" element={<First />} /> */}

        <Route path="/" element={<Layouts />}>
          {/* Nested Route */}
          <Route index element={<HomePage />} />
          <Route path="products" element={<Product />} />
          <Route
            path="productdetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="redux/first" element={<Nav />} />
          {/* <Route path="redux/product" element={<ShowProduct />} /> */}
          {/* <Route path="redux/test" element={<SingleProduct />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
