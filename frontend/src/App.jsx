import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AppDownload from "./components/AppDownload/AppDownload.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
}
