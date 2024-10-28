// import React, { useEffect, useRef, useState } from "react";

// const Modal = () => {
//   const [modalOpen, setModalOpen] = useState(true);
//   const trigger = useRef(null);
//   const modal = useRef(null);

//   // Close on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!modal.current) return;
//       if (!modalOpen || modal.current.contains(target) || trigger.current.contains(target)) return;
//       setModalOpen(false);
//     };
//     document.addEventListener("click", clickHandler);
//     return () => document.removeEventListener("click", clickHandler);
//   }, [modalOpen]);

//   // Close on 'Escape' key press
//   useEffect(() => {
//     const keyHandler = ({ keyCode }) => {
//       if (keyCode === 27 && modalOpen) setModalOpen(false);
//     };
//     document.addEventListener("keydown", keyHandler);
//     return () => document.removeEventListener("keydown", keyHandler);
//   }, [modalOpen]);

//   return (
//     <>
//       <div className="container mx-auto py-20">
//         <button
//           ref={trigger}
//           onClick={() => setModalOpen(true)}
//           className="rounded-full bg-primary px-6 py-3 text-base font-medium text-white"
//         >
//           Open Modal
//         </button>

//         {modalOpen && (
//           <div className="fixed inset-0 flex h-full min-h-screen w-full items-center justify-center bg-black/70 px-4 py-5 z-50">
//             <div
//               ref={modal}
//               className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center shadow-lg dark:bg-gray-800 md:px-[70px] md:py-[60px]"
//             >
//               <h3 className="pb-4 text-xl font-semibold text-dark dark:text-white sm:text-2xl">
//                 Your Message Sent Successfully
//               </h3>
//               <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"></span>
//               <p className="mb-10 text-base leading-relaxed text-gray-700 dark:text-gray-300">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy text
//                 ever since.
//               </p>

//               <div className="flex space-x-3">
//                 <button
//                   onClick={() => setModalOpen(false)}
//                   className="flex-1 rounded-md border border-gray-400 p-3 text-base font-medium text-dark transition hover:bg-red-600 hover:text-white dark:text-white"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="flex-1 rounded-md border border-primary bg-primary p-3 text-base font-medium text-white transition hover:bg-blue-700"
//                 >
//                   <a href="/#" onClick={() => setModalOpen(false)}>View Details</a>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Modal;
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({ modalOpen, onClose, title, message, variant }) => {
  const trigger = useRef(null);
  const modal = useRef(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (!modalOpen || modal.current.contains(target) || trigger.current.contains(target)) return;
      onClose();
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [modalOpen, onClose]);

  // Close on 'Escape' key press
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
