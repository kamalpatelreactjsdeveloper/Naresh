import React from 'react';
import BackgroundImage from '../image/Contactusbanner.jpg';

const Contactusbanner = () => {
    return (
        <div className="relative w-full 2xl:pt-[50px]">
            <img
                src={BackgroundImage}
                alt="Construction Site"
                className="w-full  object-cover"
            />

            <div className="absolute inset-0  to-transparent flex items-center justify-start px-8 lg:px-20">
                <div className="text-black">
                    <h1 className="grid text-right mt-[-50px]">
                        <span className="text-customtext font-bold text-left lg:text-[80px] md:text-[50px] xs:text-[30px] ">CONTACT</span> 
                         <span className="text-black font-medium text-right md:pr-[12px] xs:pr-[0] lg:text-[50px] md:text-[30px] xs:text-[20px] xs:mt-[-12px] md:mt-[-30px]">Us</span>
                    </h1>
                </div>
            </div>

            <div>
                <h3 className="text-start md:text-2xl bg-white text-black p-5 pl-16 lg:pl-[70px]">
                    Home &gt; <span className="text-customtext font-semibold">Contact Us</span>
                </h3>
            </div>
        </div>
    );
};

export default Contactusbanner;
