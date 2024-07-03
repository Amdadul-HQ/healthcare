import React from "react";
import MaxWidth from "../Shared/MaxWidth";
import SectionTitle from "../Shared/SectionTitle";
import Heading from "../Shared/Heading";
import Button from "../Shared/Button";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="mt-40">
      <MaxWidth>
        <div className="flex items-center justify-between">
          <div>
            <SectionTitle text="Who We Are" />
            <Heading className='max-w-[396px]' text={`We Help To Get Soultions`}/>
            <p className="max-w-[470px] text-secondly font-normal text-base">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
            
                <Button text='Learn More' className='bg-[#FFC637] font-medium mt-11'/>
          </div>
          <div className="relative">
            <Image src='/Media/whoweare.png' width={568} height={415} alt=""/>
            <div className="bg-secondly w-fit px-[30px] py-12 rounded-[32px] absolute -bottom-14 -left-28">
                <h1 className="text-[26px] font-medium text-white">Our mission is simple</h1>
                <p className="max-w-[347px] text-[rgba(255,255,255,0.80)] font-normal mt-5">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default WhoWeAre;
