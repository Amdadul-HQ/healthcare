import React from 'react';
import MaxWidth from '../Shared/MaxWidth';
import Image from 'next/image';

const Hero = () => {
    return (
        <section>
            <MaxWidth>
                <div className='w-full h-[470px] relative'>
               <Image src='/Media/Rectangle5.png' className='z-0' width={1160} height={470} alt='banner'/>
                
                </div>
            </MaxWidth>
        </section>
    );
};

export default Hero;