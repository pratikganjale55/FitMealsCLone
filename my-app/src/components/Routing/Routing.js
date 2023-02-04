import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


import Login from "../Login/Login";

import Reg from "../Registration/Registration";
import Homepage from "../HomePage/Homepage";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductListing from "../Products/containers/ProductListing";
import { CategoryCard } from "../Products/containers/CategoryCard";
import { Cart } from "../Products/containers/Cart";
import Health from "../health/Health";
import Athletic from "../Mealplans/Athletic";
import Maintenance from "../Mealplans/Maintenance";
import Keto from "../Mealplans/Keto";
import WeightMealPlans from "../Mealplans/WeightMealPlans";
import Checkout from "../health/Checkout";
import Pay from "../health/Pay";

export default function () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="registration" element={<Reg />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:sweets" element={<CategoryCard />} />
          <Route path="/products/:sauces" element={<CategoryCard />} />
          <Route path="/products/:butter" element={<CategoryCard />} />
          <Route path="/health" element={<Health />} />
          <Route path="/weightmealplans" element={<WeightMealPlans />} />
          <Route path="/keto" element={<Keto />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/athletic" element={<Athletic />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Pay />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
