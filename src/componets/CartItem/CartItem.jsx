import { FiDelete } from "react-icons/fi";
import "./CartItem.css";

const CartItem = ({ dog, deleteDogtById }) => {
  return (
    <div className="item">
      <span>{dog.name}</span>

      <button
        onClick={() => {
          deleteDogtById(dog.id);
        }}
      >
        <FiDelete className="item__FiDelete" size={20} />
      </button>
    </div>
  );
};

export default CartItem;
