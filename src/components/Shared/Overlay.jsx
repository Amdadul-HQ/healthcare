import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Overlay = ({title,des}) => {
    return (
        <div className='absolute p-[18px] bg-[#020043cc] rounded-3xl -bottom-10 lg:bottom-5 left-5 w-fit'>
            <h3 className='text-white lg:text-xl font-semibold'>{title}</h3>
            <div className='flex justify-between group'>
            <p className='text-[#FFFFF5] text-sm max-w-[259px] lg:mt-2'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
            <p className='h-12 w-12 mt-6 bg-[#FFC637] group-hover:bg-secondly group-hover:text-[#FFC637] transition-all duration-500 flex justify-center items-center text-4xl p-2 rounded-full text-white'>
                <GoArrowUpRight/>
            </p>
            </div>
        </div>
    );
};

export default Overlay;