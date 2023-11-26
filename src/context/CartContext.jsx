import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { upDateLocalStorage } from "../helpers/helpers";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalDogs, setTotalDogs] = useState(0);

  const existInCart = (id) => {
    return cart.some((dog) => dog.id === id);
  };

  const addDog = (dog) => {
    if (existInCart(dog.id)) {
      return;
    }

    setCart([...cart, dog]);
    upDateLocalStorage([...cart, dog]);
  };

  const deleteDogById = (id) => {
    const newCart = cart.filter((dog) => dog.id !== id);
    setCart(newCart);
    upDateLocalStorage(newCart);
  };

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartLS);
  }, []);

  useEffect(() => {
    setTotalDogs(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addDog,
        deleteDogById,
        totalDogs,
        existInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
