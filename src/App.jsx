import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartProvider from "./context/CartContext";
import Header from "./layouts/Header/Header";
import Aside from "./layouts/Aside/Aside";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import Dogs from "./pages/Dogs/Dogs";
import DetailDogs from "./pages/DetailDogs/DetailDogs";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";

import "./App.css";

const App = () => {
  const [asideStatus, setasideStatus] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header setasideStatus={setasideStatus} asideStatus={asideStatus} />

        <Aside asideStatus={asideStatus} setasideStatus={setasideStatus} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs/:category" element={<Dogs />} />
          <Route
            path="/detail/:id"
            element={<DetailDogs setasideStatus={setasideStatus} />}
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* Aca iría un footer */}
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
