import { BiSolidHomeSmile } from "react-icons/bi";
import PropTypes from 'prop-types';

import './CartWidget.css';


const CartWidget = ({adoptedDogsLength}) => {
    return (
        <div className="cart-widget">
            <BiSolidHomeSmile size={45} className="cart-widget__BiSolidHomeSmile"/>
            <div className="cart-widget__count">
                {adoptedDogsLength}
            </div>
        </div>
    )
}

CartWidget.propTypes = {
    adoptedDogsLength: PropTypes.number.isRequired
    }

export default CartWidget;