import React, { useState } from "react";

const SwitchToggle = ({
  checked: initialChecked = false,
  onChange,
  variant,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const baseClasses = "relative inline-flex h-6 w-11 items-center rounded-full";
  const variants = {
    default: "bg-gray-300",
    animated: "transition-colors duration-300 ease-in-out",
    gradient: "bg-gradient-to-r from-green-400 to-blue-500",
    hover: "hover:bg-gray-400",
    shadow: "shadow-lg",
    glow: "bg-gray-300 shadow-[0_0_10px_rgba(0,0,255,0.6)]",
    outline: "border-2 border-blue-400",
    filled: "bg-blue-600",
    pulsate: "animate-pulse bg-green-500",
    scale: "transform transition-transform duration-300 ease-in-out",
  };

  return (
    <button
      onClick={handleToggle} // Update to toggle on click
      className={`${baseClasses} ${variants[variant]} ${
        checked ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform ${
          checked ? "translate-x-5" : "translate-x-1"
        } ${variant === "scale" ? "scale-110" : ""}`}
      />
    </button>
  );
};

export default SwitchToggle;
