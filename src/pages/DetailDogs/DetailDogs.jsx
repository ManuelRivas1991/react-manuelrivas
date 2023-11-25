import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import environments from "../../environments/environments";
import Button from "../../componets/Button/Button";
import Modal from "../../componets/Modal/Modal";
import { calculateAge } from "../../helpers/helpers";
import "./DetailDogs.css";

const DetailDogs = ({ setasideStatus }) => {
  const { id } = useParams();
  const { addDog, existInCart } = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({});
  const [dog, setDog] = useState({});
  const navigate = useNavigate();

  const getDogbyId = async (id) => {
    try {
      const response = await fetch(environments.dogsUrl);
      const data = await response.json();
      const result = data.find((dog) => dog.id === id);
      setDog(result);
    } catch (error) {
      console.error(error);
    }
  };

  const setModalMessage = () => {
    if (existInCart(id)) {
      setMessage({
        modalTitle: `Ya tienes a ${dog.name} en la lista`,
        buttonTitle: "Volver al Listado",
      });
    } else {
      setMessage({
        modalTitle: `¿Deseas solicitar la adopción de ${dog.name}?`,
        buttonTitle: "Si, Adoptar",
      });
    }
  };

  useEffect(() => {
    getDogbyId(id);
    setasideStatus(false);
  }, []);

  return (
    <>
      {modal && (
        <Modal
          modalTitle={message.modalTitle}
          buttonTitle={message.buttonTitle}
          handleClickButton={() => {
            if (existInCart(id)) {
              navigate("/dogs/all");
              return;
            }
            addDog(dog);
            setModal(false);
          }}
          handleClickClose={() => {
            setModal(false);
          }}
        />
      )}

      <main className="detail-container">
        <div>
          <img src={dog.img} alt={dog.name} />
        </div>
        <section>
          <header>
            <h1>{dog.name}</h1>
            <span> {dog.birthdate && calculateAge(dog.birthdate)} </span>
          </header>
          <span>
            <strong>
              {dog.sex} de carácter {dog.character} y tamaño {dog.size}
            </strong>
          </span>
          <p>{dog.detail}</p>

          <Button
            buttonTitle="Adoptar"
            handleClick={() => {
              setModalMessage();
              setModal(true);
            }}
          />
          <Button
            buttonTitle="Volver al Listado"
            handleClick={() => navigate("/dogs/all")}
          />
        </section>
      </main>
    </>
  );
};

DetailDogs.propTypes = {
  setasideStatus: PropTypes.func.isRequired,
};

export default DetailDogs;
