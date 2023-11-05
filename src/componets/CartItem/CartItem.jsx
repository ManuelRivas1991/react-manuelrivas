import { FiDelete } from "react-icons/fi";
import "./CartItem.css";

const CartItem = ({ dog, deleteDogtById }) => {
  return (
    <li className="table-row">
      <div>
        <img src={dog.img} alt={dog.name} className="item__img" />
      </div>
      <div>
        <span> {dog.name} </span>
      </div>
      <div>
        <button
          onClick={() => {
            deleteDogtById(dog.id);
          }}
        >
          <FiDelete className="item__FiDelete" size={25} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
