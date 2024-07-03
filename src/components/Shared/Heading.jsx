import React from 'react';

const Heading = ({text,className}) => {
    return (
        <h1 className={`text-primary text-4xl font-semibold mt-4 leading-[54px] ${className}`}>
            {text}
        </h1>
    );
};

export default Heading;