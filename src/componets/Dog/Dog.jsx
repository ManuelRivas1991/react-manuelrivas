import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { TbHandClick } from "react-icons/tb";
import { calcularEdad } from "../../helpers/helpers";
import "./Dog.css";

const Dog = ({ dog }) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => {
        navigate(`/detail/${dog.id}`);
      }}
      className="dog-card"
    >
      <img className="dog-card__image" src={dog.img} alt="" />

      <section>
        <div className="dog-card__info">
          <span>
            <strong>{dog.name}</strong>
          </span>
          <hr />
          <span>
            {dog.sex} {dog.petLifeStage}
          </span>
          <span>Tamaño {dog.size}</span>
          <span>{dog.character}</span>
          <span>Edad: {calcularEdad(dog.birthdate)}</span>
        </div>

        <div className="dog-card__click">
          <TbHandClick size={30} />
          <span>Click para conocer su historia</span>
        </div>
      </section>
    </article>
  );
};

Dog.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    petLifeStage: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    adoptionStatus: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dog;
