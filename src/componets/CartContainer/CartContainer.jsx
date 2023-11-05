import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

const CartContainer = ({ cart, deleteDogtById }) => {
  return (
    <form className="cartContainer">
      <ul className="responsive-table">
        <li className="table-header">
          <div>Foto</div>
          <div>Nombre</div>
          <div>Quitar</div>
        </li>

        {cart.map((dog) => (
          <CartItem key={dog.id} dog={dog} deleteDogtById={deleteDogtById} />
        ))}
      </ul>
    </form>
  );
};

export default CartContainer;
