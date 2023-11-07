import PropTypes from "prop-types";
import Button from "../../componets/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.css";

const Modal = ({
  modalTitle,
  buttonTitle,
  handleClickButton,
  handleClickClose,
}) => {
  return (
    <div className="modal">
      <AiOutlineClose className="modal__close" onClick={handleClickClose} />
      <h1 className="modal__title"> {modalTitle} </h1>
      <Button
        buttonTitle={buttonTitle}
        handleClick={handleClickButton}
      ></Button>
    </div>
  );
};

Modal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  handleClickButton: PropTypes.func.isRequired,
  handleClickClose: PropTypes.func.isRequired,
};

export default Modal;
