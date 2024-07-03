import React from 'react';

const SectionTitle = ({text}) => {
    return (
        <h3 className='text-primary text-xl w-fit font-normal px-6 py-3 border border-primary rounded-3xl'>
            {text}
        </h3>
    );
};

export default SectionTitle;