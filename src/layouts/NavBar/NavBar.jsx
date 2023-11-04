import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavBar.css";

const NavBar = ({ setasideStatus }) => {
  return (
    <nav className="navbar-container">
      {/* Se modifica el estado de asideStatus a false 
        para que se cierre el aside al hacer click en el NavLink */}
      <NavLink to="/" onClick={() => setasideStatus(false)}>
        Inicio
      </NavLink>

      <NavLink to="/aboutUs" onClick={() => setasideStatus(false)}>
        Quienes Somos
      </NavLink>

      <NavLink to="/contact" onClick={() => setasideStatus(false)}>
        Contacto
      </NavLink>
    </nav>
  );
};

NavBar.propTypes = {
  setasideStatus: PropTypes.func.isRequired,
};

export default NavBar;
