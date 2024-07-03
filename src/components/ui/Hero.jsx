import React from 'react';
import MaxWidth from '../Shared/MaxWidth';
import Image from 'next/image';

const Hero = () => {
    return (
        <section>
            <MaxWidth>
                {/* <div className='w-full h-[470px] relative'>
               <Image src='/Media/Rectangle5.png' className='z-0' width={1160} height={470} alt='banner'/>
                
                </div> */}
                <div className="relative w-[1160px] h-[470px]">
          <Image
            className="rounded-[48px]"
            src="/Media/Rectangle5.png"
            width={1160}
            height={477}
            alt=""
          />
          <div className="absolute bg-gradient-to-t from-[#02004378] to-[#00C19D00] w-full h-full bottom-0 rounded-[48px]">
           
          </div>
        </div>
            </MaxWidth>
        </section>
    );
};

export default Hero;