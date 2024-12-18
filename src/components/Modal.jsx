import { useEffect } from "react";
import { ReactComponent as CloseIcon } from "../assets/close.svg";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, title, icon, children }) => {
  // If the modal is open hide the window scroll
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when modal unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="text-button">
            <CloseIcon className="modal-header__close-img" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
