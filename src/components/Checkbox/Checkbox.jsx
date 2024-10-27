// import React from "react";

// const Checkbox = ({ checked, onChange, onClick, variant }) => {
//   const baseClasses = "h-5 w-5 border-2 rounded focus:outline-none";
//   const variants = {
//     default: "border-gray-300 bg-white",
//     animated: "transition-transform duration-300 ease-in-out",
//     gradient: "bg-gradient-to-r from-pink-500 to-yellow-500",
//   };

//   const handleClick = () => {
//     if (onClick) {
//       onClick();
//     }
//     onChange(!checked);
//   };

//   return (
//     <label className="flex items-center cursor-pointer">
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={handleClick}
//         className="hidden"
//       />
//       <span
//         className={`${baseClasses} ${variants[variant]} ${
//           variant === "animated" ? "transform" : ""
//         } ${checked ? "bg-blue-500 border-blue-500" : ""}`}
//       >
//         {checked && (
//           <svg
//             className="w-4 h-4 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         )}
//       </span>
//     </label>
//   );
// };

// export default Checkbox;
import React from "react";

const Checkbox = ({ checked, onChange, onClick, variant }) => {
  const baseClasses = "h-5 w-5 border-2 focus:outline-none";

  const variants = {
    default: "border-gray-300 bg-white",
    animated: "transition-transform duration-300 ease-in-out",
    gradient: "bg-gradient-to-r from-pink-500 to-yellow-500",
    outline: "border-blue-500",
    rounded: "rounded-full",
    shadow: "shadow-md",
    glow: "shadow-lg shadow-blue-400",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick}
        className="hidden"
      />
      <span
        className={`${baseClasses} ${variants[variant]} ${
          checked ? "bg-blue-500 border-blue-500" : ""
        } ${variant === "animated" ? "transform" : ""}`}
        onClick={handleClick}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
