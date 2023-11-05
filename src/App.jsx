import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CartProvider from "./context/CartContext";
import Header from "./layouts/Header/Header";
import Aside from "./layouts/Aside/Aside";
import Home from "./pages/Home/Home";
import Dogs from "./pages/Dogs/Dogs";
import DetailDogs from "./pages/DetailDogs/DetailDogs";
import Cart from "./pages/Cart/Cart";
import "./App.css";

const App = () => {
  //asideStatus controla si el aside esta abierto o cerrado
  const [asideStatus, setasideStatus] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header setasideStatus={setasideStatus} asideStatus={asideStatus} />

        <Aside asideStatus={asideStatus} setasideStatus={setasideStatus} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dogs" element={<Dogs />}>
            <Route path=":category" element={<Dogs />} />
          </Route>

          <Route path="/detail/:id" element={<DetailDogs setasideStatus={setasideStatus} />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* Aca iría un footer */}
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
