import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "../NavBar/NavBar";
import "./Aside.css";

const Aside = ({ asideStatus, setasideStatus }) => {
  return (
    <aside className={`aside-container ${asideStatus ? "active" : "disabled"}`}>
      <header>
        <span>Adopción</span>
        <span>Responsable</span>
      </header>

      <hr />

      <NavBar setasideStatus={setasideStatus} />

      <hr />

      <section className="aside-container__allDogs">
        <NavLink to="/dogs/all" onClick={() => setasideStatus(false)}>
          Mostrar Todos
        </NavLink>
      </section>

      <hr />

      <section>
        <h4>
          <strong>Filtrar por:</strong>
        </h4>

        <div>
          <NavLink to="/dogs/females" onClick={() => setasideStatus(false)}>
            Hembras
          </NavLink>

          <NavLink to="/dogs/males" onClick={() => setasideStatus(false)}>
            Machos
          </NavLink>

          <NavLink to="/dogs/puppies" onClick={() => setasideStatus(false)}>
            Cachorros
          </NavLink>
        </div>
      </section>

      <hr />
    </aside>
  );
};

Aside.propTypes = {
  asideStatus: PropTypes.bool.isRequired,
  setasideStatus: PropTypes.func.isRequired,
};

export default Aside;
