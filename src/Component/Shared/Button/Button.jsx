import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`uppercase py-2 px-3 duration-300 rounded-md mt-4 text-white font-semibold ${
        !className && "hover:bg-[#0FCFEC] bg-[#19D3AE]"
      } ${className && className}`}
    >
      {children}
    </button>
  );
};

export default Button;
