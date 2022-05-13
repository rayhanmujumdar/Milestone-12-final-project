import React from 'react';

const Button = ({title,className}) => {
    return (
        <button className={`bg-[#19D3AE] uppercase py-2 px-3 rounded-md mt-4 text-white font-semibold hover:bg-[#0FCFEC] ${className}`}>{title}</button>
    );
};

export default Button;