import React from "react";

const Loading = ({ className, ...props }) => {
    console.log(className)
  return (
    <div {...props} className="flex justify-center items-center">
      <div
        className={`spinner-grow inline-block bg-current rounded-full opacity-0 ${className}`}
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
