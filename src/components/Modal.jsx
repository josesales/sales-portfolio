import { useEffect } from "react";
import { ReactComponent as CloseIcon } from "../assets/close.svg";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, title, icon, children }) => {
  // If the modal is open hide the window scroll
  useEffect(() => {
    // get the scrollbar width to prevent content to move to the right when scrollbar is hidden
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    if (show) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // apply the fixed header adjustment class which makes the elements from the header to not move if scrollbar is hidden
      document.querySelector(
        ".header"
      ).style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // reset overflow and padding when the modal is closed
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
      document.querySelector(".header").style.paddingRight = "0";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
      document.querySelector(".header").style.paddingRight = "0";
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
          {icon ? (
            <div className="modal-icon-container">
              <img src={icon} alt="modal-icon-img" className="modal-icon-img" />
            </div>
          ) : (
            <h2>{title}</h2>
          )}
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
