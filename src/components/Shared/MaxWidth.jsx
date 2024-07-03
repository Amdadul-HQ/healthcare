import React from 'react';

const MaxWidth = ({children}) => {
    return (
        <section className='max-w-[1160px] mx-auto'>
            {children}
        </section>
    );
};

export default MaxWidth;