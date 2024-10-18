import React from 'react';
import ConcreteImage from '../image/Group 1.jpg'; 
import VisionImage from '../image/Layer_101.png'; 
import MissionImage from '../image/mission images.png';
import StrengthBg from '../image/images1234.png';
import EarthImage from '../image/env12.png';
import Image1 from '../image/Image1.png';
import Image2 from '../image/Image2.png';
import Image3 from '../image/Image3.png';
import images11 from '../image/quality2.png'
const About1 = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row bg-customtext text-white xs:pb-[50px]">
                <div className=" xs:order-2 flex flex-col justify-center text-start lg:w-[65%] md:w-[60%] xs:pl-[50px] xs:pt-[50px] xl:pt-[100px] px-6 md:pl-[70px]  lg:pl-[150px] xl:pb-[80px] lg:pb-0px">
                    <h2 className="xl:text-[41px] lg:text-[31px] md:text-[21px] xs:text-[20px] xs:mb-[-15px] md:mb-[-15px]  lg:mb-0 font-semibold">WE DELIVER QUALITY</h2>
                    <h1 className="xl:text-[80px] lg:text-[60px] md:text-[40px] xs:text-[40px] md:mt-0 font-bold lg:mt-2">CONCRETE</h1>
                    <p className="text-base xs:text-[15px] md:text-[13px] lg:text-[15px] xl:text-[16px] mt-4 md:mt-0 lg:mt-6 leading-relaxed  md:w-[80%]">
                        Our vision is to build a world that balances progress and heritage. Naresh Enterprises is a professionally
                        managed company that produces Ready Mix Concrete for the building industry. Naresh Enterprises is poised
                        to become a prominent player in the sunrise sector by leveraging extensive experience and resources.
                        The Naresh Group’s commitment to quality goes beyond their RMC services. Our RMC is tailored to the individual
                        requirements of your project, whether residential, commercial, or infrastructure. With an emphasis on
                        sustainability, innovation, and customer pleasure, we provide RMC solutions that will stand the test of
                        time while minimizing environmental impact. Naresh Enterprise was established by Mr. Shreyas Dave.
                    </p>
                </div>

                <div className="md:w-[40%] lg:w-[35%]  xl:pl-[0px]">
                    <img
                        src={ConcreteImage}
                        alt="Concrete pouring"
                        className=" object-cover lg:w-[550px] xl:h-[777px] xs:h-[500px] h-full w-full opacity-40"
                    /> 
                </div>
            </div>
            <section className="flex flex-col md:flex-row items-center  w-full py-12 lg:py-0 px-6 lg:px-20 bg-white">
                <div className=" md:w-[60%]  md:p-[50px] lg:p-0 flex justify-center lg:h-[450px] xl:pt-[50px] lg:pt-[40px] md:pt-[50px]">
                    <img
                        src={VisionImage} 
                        alt="Vision Illustration"
                        className="w-100 h-full xl:pl-[40px] lg:pl-0" 
                    />
                </div>

                <div className=" md:w-[40%]  xl:mt-8 lg:mt-0 md:pt-0 text-left">
                    <h2 className="text-2xl md:text-[25px] lg:text-4xl italic mb-4">
                        <span className="block text-black ">OUR</span>
                        <span className="block text-customtext xl:text-[80px] lg:text-[65px] md:text-[50px] xs:text-[40px] xl:pt-6 lg:pt-2 font-bold">VISION</span>
                    </h2>
                    <p className="text-black text-sm xs:text-[15px] md:text-[10px] lg:text-[20px] lg:leading-relaxed md:pt-2 lg:pt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo do viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
            </section>
            <section className=" flex flex-col md:flex-row items-center  w-full py-12 lg:py-0 px-6 lg:pb-0 lg:px-20">
                <div className="xs:order-2 w-full lg:w-[50%] md:w-[55%]  text-left xl:pl-[120px] md:pl-[50px]">
                    <h2 className="text-2xl md:text-[25px] lg:text-4xl italic mb-4">
                        <span className="block text-black">OUR</span>
                        <span className="block text-customtext xs:text-[40px] md:text-[50px] lg:text-[65px] xl:text-[80px] xl:pt-6 md:pt-[10px]  lg:pt-2 font-bold pl-[0px]">MISSION</span>
                    </h2>
                    <p className="text-black text-sm xs:text-[15px] md:text-[10px] lg:text-[20px] lg:leading-relaxed md:w-[100%] xl:pt-6 lg:pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo do viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
            
                <div className="xs:order-1 w-full lg:w-[50%] md:w-[45%] flex justify-center xl:mt-8 lg:mt-0 lg:h-[600px] lg:pt-[40px] md:pt-[0px]">
                    <img
                        src={MissionImage} // Update this with the correct path
                        alt="Mission Illustration"
                        className="w-100 h-full" // Adjust the width and height as needed
                    />
                </div>
            </section>
            <section className="relative w-full h-auto py-16">
            
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${StrengthBg})`,
                    }}
                ></div>

                <div className="absolute inset-0 bg-customtext opacity-70"></div>

                <div className="relative z-10 container  mx-auto px-6 lg:px-20 text-center text-white">
                  <div className='leading-[50px]'>
                    <h2 className="text-xl lg:text-[40px] md:text-[25px] xs:text-[25px] font-semibold ">
                        OUR  </h2>
                        <span className=" font-bold italic  text-white xl:text-[90px] lg:text-[70px] md:text-[50px] xs:text-[40px]">STRENGTH</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                        <div className="flex flex-col items-center leading-[20px]">
                            <div>  
                                <img
                                src={Image1} 
                                alt="Mission Illustration"
                                className="w-100 h-full"
                            />
                            </div>
                            <div className="text-7xl xs:text-5xl font-bold">500</div>
                            <div className="mt-2 text-lg  xs:mt-[-5px]">Clients</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div>
                                <img
                                    src={Image2} 
                                    alt="Mission Illustration"
                                    className="w-100 h-full" 
                                />
                            </div>
                            <div className="text-7xl font-bold xs:text-5xl">10</div>
                            <div className="mt-2 text-lg  xs:mt-[-5px]">Vehicles</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div>
                                <img
                                    src={Image3}
                                    alt="Mission Illustration"
                                    className="w-100 h-full" 
                                />
                            </div>
                            <div className="text-7xl font-bold xs:text-5xl">60</div>
                            <div className="mt-2 text-lg xs:mt-[-5px]">M³/Hr</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center justify-between w-full  py-16 px-8 lg:px-10 mb-5 pb-0 xs:pr-[5px]">
                <div className="w-full md:w-[55%] flex justify-center lg:justify-start mb-8 xs:p-0 lg:mb-0">
                    <img
                        src={EarthImage}
                        alt="Earth Illustration"
                        className="xl:w-100 xl:h-full p-5 pb-0 mt-[50px] ml-[0px]"
                    />
                </div>

                <div className="w-full md:w-[45%] xl:p-3  text-left">
                    <h2 className="xl:text-[35px] lg:text-[25px]  italic  lg:mb-[-22px] md:mb-[-14px] md:text-[18px] xs:mb-[-14px]  xs:text-[25px] a:text-[20px] pl-2">ENVIRONMENTALLY</h2>
                    <h1 className=" xl:text-[75px] lg:text-[60px] md:text-[40px] xs:text-[50px] a:text-[40px] italic font-bold text-customtext  lg:mb-0 lg:pt-0">CONSCIOUS</h1>
                    <p className=" text-black xl:text-[17px] lg:text-[14px] md:text-[10px] xs:text-[12px] a:text-[10px] pl-2 mb-4  font-bold ">Make a Promise to Preserve the Environment we try to ensure:</p>
            
                    <div className="pl-3">
                    
                        <div className="flex items-start space-x-3">
                            <div className="flex items-center justify-center xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:w-3 md:h-3 xs:w-5 xs:h-5 xs:text-[10px] text-[11px]  bg-customtext text-white font-bold rounded-full">1</div>
                            <p className="flex-1 text-black xl:text-[17px] lg:text-[14px] md:text-[10px] xs:text-[12px] a:text-[8px]   font-sans font-medium">
                                Moving Fly ash is transported to the plant in sealed Bulker or <br/> Pneumatic containers, avoiding dust pollution en route.
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 pt-2">
                            <div className="flex items-center justify-center xl:w-6 xl:h-6 lg:w-6 lg:h-6 md:w-3 md:h-3 xs:w-5 xs:h-5 xs:text-[10px] text-[11px] bg-customtext text-white font-bold rounded-full">2</div>
                            <p className="flex-1 text-black xl:text-[17px] lg:text-[14px] md:text-[10px] xs:text-[12px] a:text-[8px] font-sans font-medium">
                                Effective technique for filtering smoke and dust emissions to <br/> prevent air pollution.
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 pt-2">
                            <div className="flex items-center justify-center xl:w-6 xl:h-6 lg:w-6 lg:h-6 md:w-3 md:h-3 xs:w-5 xs:h-5 xs:text-[10px] text-[11px] bg-customtext text-white font-bold rounded-full">3</div>
                            <p className="flex-1 text-black xl:text-[17px] lg:text-[14px] md:text-[10px] xs:text-[12px] a:text-[8px] font-sans font-medium">
                                An abundance of greenery, plants, leaves, and trees surrounds <br/> the plant. Safely dispose of waste generated during RMC <br/> production to ensure it is nontoxic and harmless.
                            </p>
                        </div>

                
                        <div className="flex items-start space-x-3 pt-2">
                            <div className="flex items-center justify-center xl:w-6 xl:h-6 lg:w-6 lg:h-6 md:w-3 md:h-3 xs:w-5 xs:h-5 xs:text-[10px] text-[11px] bg-customtext text-white font-bold rounded-full">4</div>
                            <p className="flex-1 text-black xl:text-[17px] lg:text-[14px] md:text-[10px] xs:text-[12px] a:text-[8px] font-sans font-medium">
                                Provisions for collecting rainfall and reusing water.
                            </p>
                        </div>

                        
                        <div className="flex items-start space-x-3 pt-2">
                            <div className="flex items-center justify-center xl:w-6 xl:h-6 lg:w-6 lg:h-6 md:w-3 md:h-3 xs:w-5 xs:h-5 xs:text-[10px] text-[11px] bg-customtext text-white font-bold rounded-full">5</div>
                            <p className="flex-1 text-black xl:text-[17px] lg:text-[14px] md:text-[10px] xs:text-[12px] a:text-[8px] font-sans font-medium">
                                Introducing revolutionary concrete production technologies<br/> for a labor-friendly environment.
                            </p>
                         </div>
                    </div>
                   
                </div>
                
            </section>
            <div>
                <img className='h-[100px] w-[100%] '
                    src={images11}
                />
            </div>
        </div>
    );
};

export default About1;
