import React from "react";
import Contactbg from "../image/Layer 15.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import images11 from '../image/quality2.png'
const Contactus1 = () => {
    return (
        <div>
            <div>
                <div className=" 2xl:max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:justify-between  pb-0 xs:pt-4 ">
                   
                    <div className="w-full md:w-1/2 text-left mb-10 lg:mb-0 bg-customtext py-[215px] pl-8 flex flex-col justify-center">
                        <p className="xl:text-[70px] lg:text-[50px] md:text-[40px] xs:text-[40px]  pl-[30px] font-bold italic text-white">THANK YOU</p>
                        <p className="italic  pl-[40px] xl:text-[40px] lg:text-[25px] md:text-[18px] xs:text-[18px] xl:mt-[-20px] text-white">
                             for showing interest in
                        </p>
                        <p className="italic  xl:text-[28px] lg:text-[18px] md:text-[13px] xs:text-[13px] xl:mt-[-15px] lg:mt-[-6px] text-white pl-[38px]">
                            SDEKAY INFRA MARKET PRIVATE LIMITED.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:p-[50px] xs:p-[24px] bg-[#f2f7fa]">
                        <form className="lg:space-y-6 md:space-y-3 xs:space-y-3">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-black lg:text-xl xs:text-xl xs:p-3 md:text-md xl:p-5 md:p-3 rounded focus:outline-none placeholder-blue-900"
                                    placeholder="Name:"
                                    pattern="[A-Za-z ]+"
                                    title="Name should only contain letters and spaces."
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full border border-black lg:text-xl xs:text-xl xs:p-3 md:text-md xl:p-5 md:p-3 rounded focus:outline-none placeholder-blue-900"
                                    placeholder="Phone No:"
                                    pattern="[0-9]+"
                                    title="Phone number should only contain numbers."
                                    minlength="10"
                                    maxlength="15"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-black lg:text-xl xs:text-xl xs:p-3 md:text-md xl:p-5 md:p-3 rounded focus:outline-none placeholder-blue-900"
                                    placeholder="Email Id:"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    className="w-full border border-black lg:text-xl xs:text-xl xs:p-3 md:text-md xl:p-5 md:p-3 rounded focus:outline-none placeholder-blue-900"
                                    placeholder="Message:"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <a href="#know-more" className="flex bg-white lg:text-lg xl:text-[20px] md:text-[12px] xs:text-[15px] s:text-[13px] a:text-[10px] md:pl-[8px] xs:pl-[8px] md:pr-[15px] xl:w-36 lg:w-[114px] md:w-[73px] xs:w-[84px] s:w-[77px] a:w-[67px] text-black border border-blue-800 xl:pr-[3px] xl:pl-[28px] lg:pl-[10px] lg:pr-[3px] py-1 uppercase hover:bg-[#005477] hover:text-white transition-colors">
                                Send
                                <div className='ml-custom-left xs:ml-[8px] xs:mr-0 xl:ml-[23px] lg:ml-[18px] md:ml-[8px] lg:mr-custom-right1 mr-custom-right'>
                                    <span className='bg-[#005477] text-white xl:px-3 lg:px-3 md:px-2 xs:px-2 xl:py-[7px] lg:pt-[8px] lg:pb-[8px] md:py-[7px] xs:pt-[6px] s:pt-[7px] xs:pb-[8px] a:pb-[7px]'>&gt;</span>
                                </div>
                            </a>
                        </form>
                    </div>
                </div>
               
            </div>
            <section className="2xl:max-w-[1440px] mx-auto flex flex-col items-center  bg-white pt-[50px] pb-[100px]">
                <h2 className="grid text-center xl:text-[35px] lg:text-[25px] xs:text-[20px] ">
                    <span className="lg:mb-[-20px] md:mb-[-10px] xs:mb-[-10px]">  We’re just one </span>
                    <span className="text-customtext font-bold xl:text-[70px] lg:text-[50px] md:text-[40px] xs:text-[40px]">CLICK AWAY </span>
                    <span className="xl:mt-[-25px] lg:mt-[-18px] md:mt-[-15px] xs:mt-[-15px]"> from you...</span>
                </h2>
                <div className="flex flex-col md:flex-row md:space-x-8 mt-8 justify-center">
                    <div className="flex flex-col items-center  md:w-[25%] bg-blue-100 p-6 rounded-lg text-center shadow-md">
                        <span className="material-icons xl:text-[50px] lg:text-[40px] md:text-[30px] xs:text-[30px]"><FontAwesomeIcon icon={faLocationDot} /></span>
                        <h3 className="font-semibold text-[25px]">Office Address:</h3>
                        <p className="text-center">
                            1410, Sanjar One world, SV road, Malad west, Mumbai – 400064.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-6 md:mt-0 md:w-[25%] bg-blue-100 p-6 rounded-lg text-center shadow-md">
                        <span className="material-icons xl:text-[50px] lg:text-[40px] md:text-[30px] xs:text-[30px]"><FontAwesomeIcon icon={faLocationDot} /> </span>
                        <h3 className="font-semibold text-[25px]">Plant Address:</h3>
                        <p className="text-center">   180/1/2, Sasunavghar, behind Shree Khodiyar kathi yawad hotel, Western express highway, Palghar - 401107.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-6 md:mt-0 md:w-[25%] bg-blue-100 p-6 rounded-lg text-center shadow-md">
                        <span className="material-icons xl:text-[50px] lg:text-[40px] md:text-[30px] xs:text-[30px]"><FontAwesomeIcon icon={faPhone} /></span>
                        <h3 className="font-semibold text-[25px]">Contact:</h3>
                        <p className="text-center">
                            +91 97020 52271 <br /> +91 8286 751918
                        </p>
                    </div>
                </div>
            </section>
            <div className=" bg-cover bg-center py-12 opacity-90" style={{
                backgroundImage: `url(${Contactbg})`,
            }} >
                {/* Header Section */}
                <div className="2xl:max-w-[1440px] mx-auto text-center text-white mb-8">
                    <h2 className="text-2xl md:text-2xl font-light">
                        If you are planning to visit us planned then proceed to this
                    </h2>
                    <h1 className="text-4xl md:text-4xl font-bold mt-4">LOCATION</h1>
                </div>

                {/* Map Section */}
                <div className="2xl:max-w-[1440px] mx-auto flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0392011657177!2d72.8447208749805!3d19.193490082035485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b749bae38923%3A0xcc47c9bbe7998721!2sOne%20World%20By%20Sanjar!5e0!3m2!1sen!2sin!4v1729072410124!5m2!1sen!2sin"
                        allowfullscreen=""
                        loading="lazy"
                        className="w-[80%] h-[400px] border-0   rounded-[20px]"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
export default Contactus1;
