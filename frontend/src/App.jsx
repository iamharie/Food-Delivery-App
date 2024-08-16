import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}
