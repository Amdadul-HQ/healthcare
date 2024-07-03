import Image from 'next/image';
import React from 'react';
import MaxWidth from './MaxWidth';
import Button from './Button';



const Navbar = () => {
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
            <nav className='flex items-center justify-between py-12'>
                <div>
                    <Image src={'/Media/logo dark.png'} width={125} height={33} alt=''/>
                </div>
                <ul className='flex gap-x-6'>
                    {
                        links && links.map(route => <li className='text-primary text-base font-normal' key={route.id}>{route.title}</li>) 
                    }
                </ul>
                <div>
                    <Button text={'Appointment'} className={'border-primary border-2 text-primary font-medium'} />
                </div>
            </nav>
            </MaxWidth>
        </header>
    );
};

export default Navbar;