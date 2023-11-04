import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const upDateLocalStorage = (cart) => {
  // Guardamos la lista de adopción en el localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalDogs, setTotalDogs] = useState(0);

  const addDog = (dog) => {
    const exist = cart.some((d) => d.id === dog.id);
    // Si el perro ya está en la lista, mostramos un mensaje y no hacemos nada más
    if (exist) {
      alert(`Ya tienes a ${dog.name} en la lista`);
      return;
    }

    // Si el perro no está en la lista, preguntamos si se desea agregar
    if (confirm(`¿Deseas solicitar la adopción de ${dog.name}?`)) {
      // Si se desea agregar, agregamos el perro a la lista
      setCart([...cart, dog]);
      // Guardamos la lista de adopción en el localStorage
      upDateLocalStorage([...cart, dog]);
    }
  };

  const deleteDogtById = (id) => {
    // usando el metodo filter, creamos un nuevo carrito sin el producto que queremos eliminar
    const newCart = cart.filter((dog) => dog.id !== id);
    // actualizamos el estado del carrito con el nuevo carrito
    setCart(newCart);
    upDateLocalStorage(newCart);
  };

  useEffect(() => {
    // Se obtiene la lista de adopción del localStorage y ai no hay datos en el localStorage, se crea un array vacío
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartLS);
  }, []);

  useEffect(() => {
    // Se actualiza el estado del total de perros
    setTotalDogs(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addDog,
        deleteDogtById,
        totalDogs,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
