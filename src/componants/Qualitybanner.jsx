import React from 'react';
import BackgroundImage from '../image/qualitybannner.jpg';

const Qualitybanner = () => {
    return (
        <div className="relative w-full h-full  ">
            <img
                src={BackgroundImage}
                alt="Construction Site"
                className="w-full object-cover"
            />

            <div className="absolute inset-0 h-full flex items-center justify-start px-8 lg:px-20">
                <div className="text-black  bg-opacity-0.6">
                    <h1 className="text-3xl text-customtext md:text-5xl lg:text-6xl from-white/100 font-bold mt-[-50px] ">
                        QUALITY
                    </h1>
                </div>
            </div>
            <div>
                <h3 className="text-start text-2xl bg-white text-black p-5 pl-16 lg:pl-[70px]">
                    Home &gt; <span className="text-customtext font-semibold">QUALITY</span>
                </h3>
            </div>
        </div>
    );
};

export default Qualitybanner;
