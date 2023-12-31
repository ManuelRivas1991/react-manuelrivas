import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";
import "./CartItem.css";

const CartItem = ({ dog, deleteDogById }) => {
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
            deleteDogById(dog.id);
          }}
        >
          <FiDelete className="item__FiDelete" size={25} />
        </button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  dog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  deleteDogById: PropTypes.func.isRequired,
};

export default CartItem;
