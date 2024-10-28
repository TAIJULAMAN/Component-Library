import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({ modalOpen, onClose, title, message, variant }) => {
  const trigger = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (!modalOpen || modal.current.contains(target) || trigger.current.contains(target)) return;
      onClose();
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [modalOpen, onClose]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode === 27 && modalOpen) onClose();
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [modalOpen, onClose]);

  const variantStyles = {
    default: "bg-white text-dark shadow-lg",
    gradient: "bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-xl",
    animated: "transform scale-105 transition duration-500 bg-white text-dark shadow-lg",
    rounded: "rounded-full bg-white text-dark shadow-md",
    glow: "bg-white text-dark shadow-lg shadow-blue-400",
  };

  return modalOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div
        ref={modal}
        className={`w-full max-w-md p-8 rounded-lg ${variantStyles[variant]} transition-all duration-300`}
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  variant: PropTypes.oneOf(["default", "gradient", "animated", "rounded", "glow"]),
};

Modal.defaultProps = {
  title: "Modal Title",
  message: "This is a modal message.",
  variant: "default",
};

export default Modal;
