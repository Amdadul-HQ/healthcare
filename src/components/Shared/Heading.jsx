import React from 'react';

const Heading = ({text}) => {
    return (
        <h1 className='text-primary text-4xl font-semibold mt-4 max-w-[396px] leading-[54px]'>
            {text}
        </h1>
    );
};

export default Heading;