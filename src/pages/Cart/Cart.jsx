import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartContainer from "../../componets/CartContainer/CartContainer";
import Button from "../../componets/Button/Button";

import "./Cart.css";

const Cart = () => {
  const { cart, deleteDogtById } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <main>
      <div>
        {cart.length === 0 ? (
          <div>
            <h1 className="cart__title">
              No hay perritos en tu lista de adopción.
            </h1>
            <Button
              title="Volver"
              handleClick={() => navigate("/dogs/all")}
            ></Button>
          </div>
        ) : (
          <CartContainer cart={cart} deleteDogtById={deleteDogtById} />
        )}
      </div>
    </main>
  );
};

export default Cart;
