import React from "react";

const Checkbox = ({ checked, onChange, onClick, variant }) => {
  const baseClasses = "h-5 w-5 border-2 rounded focus:outline-none";
  const variants = {
    default: "border-gray-300 bg-white",
    animated: "transition-transform duration-300 ease-in-out",
    gradient: "bg-gradient-to-r from-pink-500 to-yellow-500",
  };

  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function when the checkbox is clicked
    }
    onChange(!checked); // Toggle the checked state
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick} // Use handleClick instead of onChange directly
        className="hidden"
      />
      <span
        className={`${baseClasses} ${variants[variant]} ${
          variant === "animated" ? "transform" : ""
        } ${checked ? "bg-blue-500 border-blue-500" : ""}`}
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
