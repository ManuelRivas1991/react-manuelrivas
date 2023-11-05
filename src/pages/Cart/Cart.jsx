import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartContainer from "../../componets/CartContainer/CartContainer";
import Modal from "../../componets/Modal/Modal";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteDogtById } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <main>
      {cart.length === 0 ? (
        <Modal
          modalTitle="No hay perritos en tu lista de adopción."
          buttonTitle="Ver Listado"
          handleClickButton={() => navigate("/dogs/all")}
          handleClickClose={() => navigate(-1)}
        />
      ) : (
        <CartContainer cart={cart} deleteDogtById={deleteDogtById} />
      )}
    </main>
  );
};

export default Cart;
