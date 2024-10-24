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
                <div className="text-black mt-[-60px] ">
                    <p className=" xs:text-[14px] italic text-black md:text-3xl xl:text-[52px] lg:text-[38px] xl:mb-7 lg:mb-4 xs "> We provide range of   </p>
                    <div className="flex italic">
                        <h1 className="text-3xl xs:text-[18px] text-customtext md:text-4xl lg:text-5xl xl:text-[64px]  font-bold ">SOLUTIONS </h1>
                        <p className="xl:pt-5  lg:pt-3 md:pt-[3px] xs:text-[14px] xs:pl-[2px] xs:pt-[8px] text-black md:text-3xl xl:text-[52px] lg:text-[38px] pl-2">in</p>
                    </div>
                    <h1 className="text-3xl italic xs:text-[18px] text-customtext lg:text-5xl xl:text-[64px] lg:pt-2  font-bold ">
                        RMC
                    </h1>
                </div>
            </div>
            <div>
                <h3 className="text-start text-2xl xs:text-[15px] bg-white text-black p-5 pl-16 lg:pl-[70px]">
                    Home &gt; <span className="text-customtext font-semibold">RMC</span>
                </h3>
            </div>
        </div>
    );
};

export default Rmcbanner;
