import React from 'react';
import BackgroundImage from '../image/rmcbanner.jpg';

const Rmcbanner = () => {
    return (
        <div className="relative w-full 2xl:pt-[50px]">
            <img
                src={BackgroundImage}
                alt="Construction Site"
                className="w-full  object-cover"
            />

            <div className="absolute inset-0 w-1/2  flex items-center justify-start px-8 lg:px-20 pt-0 ">
                <div className="text-black  ">
                    <p className=" xs:text-xl italic text-black md:text-xl lg:text-[52px]  mb-7 "> We provide range of   </p>
                    <div className="flex italic">
                        <h1 className="text-3xl xs:text-xl text-customtext md:text-5xl lg:text-[64px] font-bold ">SOLUTIONS </h1>
                        <p className="pt-5 xs:text-xl text-black md:text-xl lg:text-[52px] pl-2">in</p>
                    </div>
                    <h1 className="text-3xl italic xs:text-xl text-customtext md:text-5xl lg:text-[64px] pt-2  font-bold ">
                        RMC
                    </h1>
                </div>
            </div>
            <div>
                <h3 className="text-start text-2xl bg-white text-black p-5 pl-16 lg:pl-[70px]">
                    Home &gt; <span className="text-customtext font-semibold">RMC</span>
                </h3>
            </div>
        </div>
    );
};

export default Rmcbanner;
