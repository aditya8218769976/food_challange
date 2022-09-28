import React from "react";
import { Routes as Router, Route } from "react-router-dom";

import FoodList from "../pages/foodList/FoodList";
import Header from "../components/header/Header";
import Login from "../pages/login/Login";
import Welcome from "../pages/welcome/Welcome";
import Thanks from "../pages/thankYou/Thanks";
import SignUp from "../pages/signup/SignUp";

const Routes = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="foodList" element={<FoodList />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="signup" element={<SignUp />} />
      </Router>
    </div>
  );
};

export default Routes;
