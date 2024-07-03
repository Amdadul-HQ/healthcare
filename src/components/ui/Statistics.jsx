import React from "react";
import MaxWidth from "../Shared/MaxWidth";
import Image from "next/image";

const Statistics = () => {
  return (
    <section>
      <MaxWidth>
        <div className="mt-10 grid grid-cols-5 gap-x-5 relative text-primary">
            <h1 className="absolute text-5xl font-semibold text-primary text-center left-[50%] -translate-x-[50%]">Comprehensive Care <br /> for Every Patient</h1>
          <div className="bg-white border rounded-3xl shadow-gray-500 shadow-xl p-5 font-normal">
            <h2 className="text-[40px] font-semibold ">90%</h2>
            <p className="text-sm font-normal max-w-[156px] mt-2">
              Patient satisfaction rate, reflecting our commitment.
            </p>
            <div className="flex justify-center items-center">
              <Image
                src="/Media/chart.png"
                className=" flex justify-center items-center mt-6"
                width={130}
                height={130}
                alt=""
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 w-full shadow-gray-500 shadow-xl h-[190px] border rounded-3xl p-5 bg-[#FFFFF5]">
              <h2 className="text-[40px] font-semibold ">500+</h2>
              <p className="text-sm font-normal max-w-[156px] mt-2">
                Board-certified <br /> doctors
              </p>
              <div className="relative">
                <Image
                  src="/Media/certified.png"
                  className="absolute right-0 -top-5"
                  width={77}
                  height={77}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 w-full shadow-gray-500 shadow-xl h-[162px] border rounded-3xl p-5 bg-[#FFFFF5]">
              <div className="flex items-center gap-x-3">
                <h2 className="text-[40px] font-semibold ">4.8</h2>
                <Image
                  src="/Media/fi-sr-star.png"
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <p className="text-sm font-normal max-w-[156px] ">
                Over 20,000 Patient
              </p>
              <div class="flex items-center mt-3">
                <Image
                  width={35}
                  height={35}
                  className="-mx-1.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                  alt=""
                />
                <Image
                  width={35}
                  height={35}
                  className="-mx-1.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80"
                  alt=""
                />
                <Image
                  width={35}
                  height={35}
                  className="-mx-1.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80"
                  alt=""
                />
                <Image
                  width={35}
                  height={35}
                  className="-mx-1.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className="absolute bottom-0 w-full shadow-gray-500 shadow-xl h-[190px] border rounded-3xl p-5 bg-[#FFFFF5]">
              <h2 className="text-[40px] font-semibold ">$5000</h2>
              <p className="text-sm font-normal max-w-[156px] ">
              Money spend <br />
              for poor patient
              </p>
              <div className="relative">
                <Image
                  src="/Media/coin.png"
                  className="absolute right-0 -top-3"
                  width={90}
                  height={71}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-3xl shadow-gray-500 shadow-xl p-5">
            <h2 className="text-[40px] font-semibold ">50+</h2>
            <p className="text-sm font-normal max-w-[156px] mt-2">
            Free lession video <br />
            for patient
            </p>
            <div className="flex justify-center items-center">
              <Image
                src="/Media/video.png"
                className=" flex justify-center items-center mt-6"
                width={130}
                height={130}
                alt=""
              />
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Statistics;
