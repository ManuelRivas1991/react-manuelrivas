import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import environments from "../../environments/environments";
import Button from "../../componets/Button/Button";
import Modal from "../../componets/Modal/Modal";
import "./DetailDogs.css";
import { calcularEdad } from "../../helpers/helpers";

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
      const data = await response.json(); // data es un array de productos
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
            <span> {dog.birthdate && calcularEdad(dog.birthdate)} </span>
          </header>
          <span>
            <strong>
              {dog.sex} de carácter {dog.character} y tamaño {dog.size}
            </strong>
          </span>
          <p>
            El proceso de adopción se realiza de forma controlada y profesional,
            y se lleva a cabo mediante un protocolo orientado a garantizar el
            bienestar del perro a tu lado, al ser ésta la única manera de
            asegurar que el perro no volverá a pasar por situaciones que puedan
            traumatizarlo. Pese a lo que pueda pensarse, es un proceso
            relativamente rápido, en el que la entidad se involucra al 100%,
            ofreciendo incluso consejo y asesoramiento sobre todo lo referente
            al perro si lo necesitas.
          </p>

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

export default DetailDogs;
