'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import MaxWidth from './MaxWidth';
import Button from './Button';
import Hamburger from 'hamburger-react'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
const links = [
    {
        id:1,
        title:'Home'
    },
    {
        id:2,
        title:'Service'
    },
    {
        id:3,
        title:'Blog'
    },
    {
        id:4,
        title:'About us'
    }
]
    return (
        <header>
            <MaxWidth>
            <nav className='flex items-center justify-between lg:py-12 py-4 lg:px-0 px-4'>
                <div>
                    <Image src={'/Media/logo dark.png'} width={125} height={33} alt=''/>
                </div>
                <ul className={`flex gap-x-6 lg:static fixed lg:flex-row flex-col transition-all duration-500 ${isOpen ? 'right-5 top-14':'-right-52 top-14'} lg:text-left text-right`}>
                    {
                        links && links.map(route => <li className='text-primary cursor-pointer text-base font-normal' key={route.id}>{route.title}</li>) 
                    }
                    <Button text={'Appointment'} className={'border-primary border-2 lg:hidden text-primary font-medium'} />
                    
                </ul>
                <div className='lg:flex hidden'>
                    <Button text={'Appointment'} className={'border-primary border-2 text-primary font-medium'} />
                </div>
                <div className='lg:hidden'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>
            </MaxWidth>
        </header>
    );
};

export default Navbar;