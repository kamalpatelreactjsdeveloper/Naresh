import React from 'react';
import BackgroundImage from '../image/Aboutusbanner.jpg';

const Aboutbanner = () => {
    return (
        <div className="relative w-full 2xl:container-[1440px] 2xl:pt-[50px]">
            <img
                src={BackgroundImage}
                alt="Construction Site"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0  to-transparent flex items-center justify-start px-8 lg:px-20">
                <div className="text-black">
                    <h1 className="text-3xl xs:text-xl md:text-3xl lg:text-4xl xl:text-6xl text-left mt-[-50px]">
                        Ready to <span className="text-customtext font-bold">MIX</span> & <br />
                        Ready to <span className="text-customtext font-bold">CONQUER!</span>
                    </h1>
                </div>
            </div>

            <div>
                <p className="text-start xs:text-[12px] lg:text-2xl md:text-lg bg-white text-black xs:p-2 xs:pl-[50px] md:p-3 md:pl-[70px] lg:p-5 pl-16 lg:pl-[70px]">
                    Home &gt; <span className="text-customtext font-semibold">About Us</span>
                </p>
            </div>
        </div>
    );
};

export default Aboutbanner;
