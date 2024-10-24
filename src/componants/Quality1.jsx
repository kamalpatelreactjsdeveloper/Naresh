import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Quality123 from '../image/Quality1.jpg';
import images11 from '../image/quality2.png';

const Quality1 = () => {
    // Using useMemo to optimize the processes array.
    const processes = useMemo(() => [
        {
            number: '1', title: 'Forward Control', details: `
Forward control and subsequent corrective action are critical components of quality
control. The following constitutes forward control.
Ingredient Test: Suppliers do not skip incoming material verification. Whether it's cement
from a reputable supplier, aggregates of various sizes, sand, supplemental cementitious
ingredients, or precisely calculated admixtures, everything is checked to industry standards
before entering the plant.
Raw Material Inspection: Bulk cement storage silos keep moisture out, while designated
stockpiles separate aggregates of varying grades. Even water cleanliness is actively
monitored to avoid adding toxins into the mix.
Calculated Design: Mix design software enables engineers to fine-tune proportions
depending on the desired strength (e.g., M25, M40 grade concrete) and other performance
requirements. They consider intended workability, exposure conditions, and even local
material properties.
Precision Equipment: Automated batching machines eliminate human error that may occur
during manual processes by precisely measuring and dosing components in accordance
with computer-designed measures.`
        },
        {
            number: '2', title: 'Immediate Control', details: `

Within the context of concrete quality control, immediate control pertains to the prompt
implementation of measures aimed at regulating the quality of concrete being
manufactured or supplied.
Production Control: Procedure Parameter examining closely: Technicians keep careful
records of the mixing duration, water-to-cement ratio, batch size, and other processing
parameters. To guarantee that concrete reaches its intended goal strength and workability,
each stage must be in line with the mix design criteria.
Batch examination: A visual examination is required prior to a truck leaving. Skilled observers
evaluate the consistency, cohesiveness, and homogeneity of the concrete. This initial
examination may reveal problems with workability, inadequate mixing, or segregation.
Product Control: RMC plants don’t rely solely on observation. These tests provide critical
quantitative data.

Slump Test: This popular test assesses how easily and smoothly concrete can be placed.
Depending on the type of concrete, several cone shapes (such as the normal slump cone
and K-Slump Tester) are frequently seen. Standards provide target slump values for different
applications, which can be modified if necessary during the production stage.
Density, Temperature, and Air Content: For specialized RMC, fresh concrete density (how
much it weighs per unit volume) is often tested. Temperature significantly impacts setting
time and must be closely controlled, even using iced water or chilled aggregates in hot
weather. In freeze-thaw environments, air entrainment testing verifies that microscopic air
bubbles have been correctly introduced to the mixture, enhancing durability.
`
        },
        {
            number: '3', title: 'Retrospective Control', details: `
Retrospective control is concerned with those factors that influence the control of
production. This might involve various procedures:
Testing of Quality Samples: Crushing cubes or cylinders of concrete that has hardened
after 28 days is one of the most crucial retroactive tests. Although it can't be done for several
days or weeks after the concrete is poured, this shows whether or not the concrete
genuinely reached the strength grade for which it was intended.
Strength Check-ups: Testing may include reexamine initial characteristics such as the
aggregate qualities from prior batches, air content, or the results of the slump test. It is
insightful to examine how and why they varied in terms of strength.
Checks of Materials: Retrospective control goes beyond the concrete. Frequent
"weighbridge" audits check the amount of concrete that was trucked out vs the amount of
raw materials (cement, aggregates) that arrive at the plant. To identify disparities, stockpiles
are evaluated on a regular basis.
Diagnosis and Revision: This goes beyond merely gathering information for the sake of it.
The aim is to detect trends. Do strength results seem to be declining with time? Perhaps
some equipment has to be calibrated again, or the sources of the materials aren't constant.
These results motivate preemptive modifications to prevent mistakes before they become
more significant issues.
SDEKAY INFRA MARKET PRIVATE LIMITED is renowned for its excellent service made possible
by digital technologies and for having an ISO Certified procedure that ensures prompt
delivery and consistent quality.
`
        }
    ], []);

    // State to manage which process is active
    const [activeProcessIndex, setActiveProcessIndex] = useState(null);

    // Function to toggle process details visibility
    const toggleProcess = (index) => {
        setActiveProcessIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div>
            <div className="2xl:max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between bg-white px-8 py-16 md:pb-0 xs:pb-0 xs:px-3">
                <div className="w-full md:w-[50%] flex justify-center">
                    <img
                        src={Quality123}
                        alt="Construction Illustration"
                        className="w-full h-auto pt-[10px]"
                    />
                </div>
                <div className="w-full md:w-[50%] text-left mt-10 lg:mt-0 lg:pl-12">
                    <p className="lg:text-[80px] md:text-[50px] xs:text-[50px] xs:pl-3 font-bold text-customtext">QUALITY</p>
                    <p className="lg:text-[38px] md:text-[21px] xs:text-[21px] xs:pl-4 font-light text-black mb-6 pl-[6px] mt-[-20px] xs:mt-[-10px] italic">Way of Life</p>

                    <div className="pl-3">
                        {[
                            "Our Plant has fully equipped quality control laboratories.",
                            "Our concrete performance is monitored in-house with military precision throughout the process.",
                            "Our mixing and testing equipment are calibrated to industry standards. Our advanced process control system detects and documents anomalies before dispatching batches to sites.",
                            "We use only the best raw materials. Extremely watchful and knowledgeable staff make great pains to filter out inferior or foreign ingredients right from the start."
                        ].map((text, index) => (
                            <div key={index} className="flex items-start space-x-3 xl:pt-4 md:pt-2">
                                <div className="flex items-center justify-center xl:w-6 xl:h-6 lg:w-6 lg:h-6 xs:w-6 xs:h-6 md:h-3 md:w-3 md:text-[8px] bg-customtext text-white font-bold rounded-full">
                                    {index + 1}
                                </div>
                                <p className="flex-1 text-black xl:text-[20px] lg:text-[14px] md:text-[10px] font-sans font-light">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="2xl:max-w-[1440px] mx-auto">
                <img
                    className="xl:h-[161px] lg:h-[140px] xs:h-[100px] md:h-[100px] w-[100%] xl:mt-[-163px] lg:mt-[-100px] xs:mt-[0px]"
                    src={images11}
                    alt="Decorative"
                />
            </div>

            {/* Quality Control Process Section */}
            <div className="2xl:max-w-[1440px] mx-auto flex flex-col items-center justify-center py-16 px-4 pt-3">
                <div className="text-center mb-8">
                    <h1 className="lg:text-[80px] md:text-[50px] xs:text-[50px] font-bold text-customtext">QUALITY</h1>
                    <p className="lg:text-[45px] md:text-[30px] xs:text-[30px] lg:mt-[-28px] md:mt-[-20px] xs:mt-[-20px] font-light text-black">Control Process</p>
                </div>

                <div className="w-full max-w-[95%]">
                    {processes.map((process, index) => (
                        <div key={index}>
                            {/* Main process bar */}
                            <div
                                className="flex justify-between items-center border-t border-b border-customtext lg:py-6 md:py-3 xs:py-3 px-10 md:pr-[5.5rem] xs:pr-[2rem] cursor-pointer"
                                onClick={() => toggleProcess(index)} // Toggle on click
                                aria-expanded={activeProcessIndex === index} // Accessibility
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="lg:text-3xl md:text-xl xs:text-lg font-bold text-black">{process.number}</span>
                                    <div className="lg:h-[70px] md:h-[40px] xs:h-[40px] p-[2px] w-2px bg-customtext mx-2"></div>
                                    <p className="lg:text-3xl md:text-xl xs:text-lg font-bold text-black">{process.title}</p>
                                </div>

                                {/* Change the icon based on the toggle state */}
                                <FontAwesomeIcon
                                    icon={activeProcessIndex === index ? faChevronUp : faChevronDown}
                                    className="lg:text-[40px] md:text-[25px] text-customtext"
                                />
                            </div>

                            {/* Details Section */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeProcessIndex === index ? 'max-h-[1000px] py-4' : 'max-h-0'
                                    }`}
                            >
                                <p className="bg-gray-100 p-4 text-lg text-black">{process.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quality1;
