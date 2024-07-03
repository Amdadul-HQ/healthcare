import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
const Button = ({text,className}) => {
    return (
        <button className={`flex items-center gap-x-2 px-7 py-3 border rounded-xl ${className}`}>
            {text}<GoArrowUpRight className='text-base'/>
        </button>
    );
};

export default Button;