import { BiSolidHomeSmile } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
import { useContext } from "react";

const CartWidget = () => {
  const { totalDogs } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <BiSolidHomeSmile size={45} className="cart-widget__BiSolidHomeSmile" />
      <div className="cart-widget__count">{totalDogs}</div>
    </div>
  );
};

export default CartWidget;
