import React from 'react';
import BackgroundImage from '../image/Productbanner.jpg';

const Productsbanner = () => {
    return (
        <div className="relative w-full ">
            <img
                src={BackgroundImage}
                alt="Construction Site"
                className="w-full  object-cover"
            />

            <div className="absolute inset-0 w-1/2  flex items-center justify-start px-8 lg:px-20 pt-0 ">
                <div className="text-black  bg-opacity-0.8">
                    <h1 className="text-3xl xs:text-xl text-customtext md:text-5xl lg:text-6xl from-white/100 font-bold xs:mt-[-50px] md:mt-[-50px]  ">
                        PRODUCTS
                    </h1>
                </div>
            </div>
            <div>
                <h3 className="text-start text-2xl bg-white text-black p-5 pl-16 lg:pl-[70px]">
                    Home &gt; <span className="text-customtext font-semibold">PRODUCTS</span>
                </h3>
            </div>
        </div>
    );
};

export default Productsbanner;
