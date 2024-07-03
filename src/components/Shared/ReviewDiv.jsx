import Image from 'next/image';
import React from 'react';

const ReviewDiv = ({details}) => {
    const {name,title,message,profassion,image} = details
    return (
        <div className='bg-[#FFFFF5] p-5 rounded-2xl'>
            <h1 className='text-primary text-xl font-semibold'>{title}</h1>
            <p className='text-secondly text-sm font-normal mt-3'>{message}</p>
            <div className='mt-4 flex items-center gap-x-3'>
                <div>
                    <Image src={image} width={44} height={44} alt=''/>
                </div>
                <div>
                    <p className='text-base font-medium text-primary'>{name} <span className='text-sm text-secondly font-normal'>{profassion}</span></p>
                    <div className='flex gap-x-1 mt-1'>
                    <Image src={'/Media/fi-sr-star.png'} width={16} height={16} alt=''/>
                    <Image src={'/Media/fi-sr-star.png'} width={16} height={16} alt=''/>
                    <Image src={'/Media/fi-sr-star.png'} width={16} height={16} alt=''/>
                    <Image src={'/Media/fi-sr-star.png'} width={16} height={16} alt=''/>
                    <Image src={'/Media/fi-sr-star.png'} width={16} height={16} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDiv;