import { useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaPaw } from "react-icons/fa6";
import CartWidget from "../../componets/CartWidget/CartWidget";
import PropTypes from "prop-types";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = ({ setasideStatus, asideStatus }) => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="menu-icon">
        <MdMenu
          size={40}
          className="menu-icon__mdmenu"
          onClick={() => setasideStatus(!asideStatus)}
        />

        <NavBar setasideStatus={setasideStatus} />
      </div>

      <div className="logo">
        <span>Adopción</span>
        <FaPaw
          onClick={() => {
            navigate("/dogs/all");
            setasideStatus(false);
          }}
          size={45}
          fill={"#10B981"}
        />
        <span>Responsable</span>
      </div>

      <div
        className="cart-widget-container"
        onClick={() => {
          setasideStatus(false);
          navigate("/cart");
        }}
      >
        <CartWidget />
      </div>
    </header>
  );
};

Header.propTypes = {
  setasideStatus: PropTypes.func.isRequired,
  asideStatus: PropTypes.bool.isRequired,
};

export default Header;
