import React from 'react';

const Button = ({children,className,...props}) => {
    return (
            <button {...props} className={`bg-[#19D3AE] uppercase py-2 px-3 duration-300 rounded-md mt-4 text-white font-semibold hover:bg-[#0FCFEC] ${className}`}>{children}</button>
    );
};

export default Button;