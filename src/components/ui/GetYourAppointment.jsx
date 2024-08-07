import React from "react";
import MaxWidth from "../Shared/MaxWidth";
import Image from "next/image";
import Button from "../Shared/Button";

const GetYourAppointment = () => {
  return (
    <section className="mt-40 mb-40">
      <MaxWidth>
        <div className="relative lg:w-[1160px] lg:h-[477px]">
          <Image
            className="rounded-[32px]"
            src="/Media/Rectangle 32.png"
            width={1160}
            height={477}
            alt=""
          />
          <div className="absolute bg-gradient-to-r from-[#020043] flex items-center p-[60px] to-[#0200434D] w-full h-full bottom-0 rounded-[32px]">
            <div>
            <h1 className="lg:text-[40px] font-semibold text-[#FFFFF5]">
              Get Your <br />
              First Appointment <br />
              at 50% Off!
            </h1>
            <div className="flex gap-x-6 lg:mt-6">
                <Button text='Appointment'className='bg-[#FFC637] hover:bg-secondly hover:text-white transition-all duration-500 font-medium lg:mt-11'/>
                <Button text='Learn More'className='bg-transparent hover:bg-[#FFC637]  hover:text-primary transition-all duration-500 text-white font-medium lg:mt-11'/>
            </div>
            </div>
            <div className="flex-1">
                <Image className="absolute lg:top-16 top-5 right-5 lg:right-16" src='/Media/logo light.png' width={125} height={33} alt=""/>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default GetYourAppointment;
