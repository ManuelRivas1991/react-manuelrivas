import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

const CartContainer = ({ cart, deleteDogtById }) => {
  return (
    <div className="cartContainer">
      {cart.map((dog) => (
        <CartItem key={dog.id} dog={dog} deleteDogtById={deleteDogtById} />
      ))}
    </div>
  );
};

export default CartContainer;
