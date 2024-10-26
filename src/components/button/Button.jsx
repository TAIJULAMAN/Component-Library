import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, variant = "primary", onClick }) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variantClasses[variant]} hover:opacity-80`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger"]),
  onClick: PropTypes.func,
};

export default Button;
