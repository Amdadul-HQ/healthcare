import React from 'react';
import MaxWidth from '../Shared/MaxWidth';
import SectionTitle from '../Shared/SectionTitle';
import Heading from '../Shared/Heading';
import Button from '../Shared/Button';
import Image from 'next/image';
import Overlay from '../Shared/Overlay';

const Service = () => {
    return (
        <section>
            <MaxWidth>
                <div className='p-10 bg-[#FFFFF5] mt-40 rounded-[32px] grid grid-cols-2 gap-x-7 gap-y-[60px]'>
                    <div>
                        <SectionTitle text='Service'/>
                        <Heading text="Empowering Health, Enriching Lives"/>
                        <p className="max-w-[470px] text-secondly font-normal text-base mt-4">
                        We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                        </p>
                        <Button text='Appointment' className='bg-[#FFC637] font-medium mt-11'/>
                    </div>
                    <div className='relative'>
                        <Image src='/Media/Rectangle 27-2.png' className='rounded-[30px]' width={525} height={395} alt=''/>
                        <Overlay title='Advanced Technology' />
                    </div>
                    <div className='relative'>
                        <Image src='/Media/Rectangle 27-1.png' className='rounded-[30px]' width={525} height={395} alt=''/>
                        <Overlay title='Online Doctor Meet' />
                    </div>
                    <div className='relative'>
                        <Image src='/Media/Rectangle 27.png' className='rounded-[30px]' width={525} height={395} alt=''/>
                        <Overlay title='Consultancy your health' />
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default Service;