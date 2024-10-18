import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Quality123 from '../image/quality1.png';
import images11 from '../image/quality2.png';
const Quality1 = () => {
    const processes = [
        { number: '1', title: 'Forward Control' },
        { number: '2', title: 'Immediate Control' },
        { number: '3', title: 'Retrospective Control' },
    ];

    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white px-8 py-16 md:pb-0 xs:pb-0 xs:px-3">
                    <div className="w-full md:w-[50%] flex justify-center">
                        <img
                            src={Quality123}
                            alt="Construction Illustration"
                            className="w-full h-auto pt-[10px]"
                        />
                    </div>
                    <div className="w-full md:w-[50%] text-left mt-10 lg:mt-0 lg:pl-12 ">
                        <p className="lg:text-[80px] md:text-[50px] xs:text-[50px] xs:pl-3 font-bold text-customtext">QUALITY</p>
                        <p className="lg:text-[38px] md:text-[21px]  xs:text-[21px] xs:pl-4 font-light text-black mb-6 pl-[6px] mt-[-20px] xs:mt-[-10px] italic">Way of Life</p>

                        <div className="pl-3">
                            {[
                                "Our Plant has fully equipped quality control laboratories.",
                                "Our concrete performance is monitored in-house with military precision throughout the process.",
                                "Our mixing and testing equipment are calibrated to industry standards. Our advanced process control system detects and documents anomalies before dispatching batches to sites. Senior technicians manage quality control at all our plants. Our Quality Check Department relies on open communication and feedback analysis to function effectively.",
                                "We use only the best raw materials. Extremely watchful and knowledgeable staff make great pains to filter out inferior or foreign ingredients right from the start."
                            ].map((text, index) => (
                                <div key={index} className="flex items-start space-x-3 xl:pt-4  md:pt-2">
                                    <div className="flex items-center justify-center xl:w-6 xl:h-6 lg:w-6 lg:h-6 xs:w-6 xs:h-6 md:h-3 md:w-3 md:text-[8px] bg-customtext text-white font-bold rounded-full">
                                        {index + 1}
                                    </div>
                                    <p className="flex-1  text-black xl:text-[20px] lg:text-[14px]  md:text-[10px] font-sans font-light">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <img className='xl:h-[161px] lg:h-[140px] xs:h-[100px] md:h-[100px] w-[100%] xl:mt-[-163px] lg:mt-[-100px] xs:mt-[0px] '
                        src={images11}
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-16 px-4 pt-3">
                <div className="text-center mb-8">
                    <h1 className=" lg:text-[80px] md:text-[50px] xs:text-[50px] font-bold text-customtext">QUALITY</h1>
                    <p className="lg:text-[45px] md:text-[30px] xs:text-[30px] lg:mt-[-28px]   md:mt-[-20px] xs:mt-[-20px] font-light text-black">Control Process</p>
                </div>

                <div className="w-full max-w-[95%]">
                    {processes.map((process, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-t border-b border-customtext lg:py-6 md:py-3 xs:py-3 px-10 md:pr-[5.5rem] xs;pr-[2rem]"
                        >
                            <div className="flex items-center space-x-4">
                                <span className="lg:text-3xl md:text-xl xs:text-lg font-bold text-black">{process.number}</span>
                                <div className="lg:h-[70px] md:h-[40px] xs:h-[40px] p-[2px] w-2px bg-customtext mx-2"></div>
                                <p className="lg:text-3xl md:text-xl xs:text-lg font-bold text-black">{process.title}</p>
                            </div>
                            <FontAwesomeIcon icon={faPlay} className='lg:text-[40px] md:text-[25px]  text-customtext' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quality1;
