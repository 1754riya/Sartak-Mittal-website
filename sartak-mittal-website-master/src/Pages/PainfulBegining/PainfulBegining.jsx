import React from "react";
import Rebellion from "./Rebellion";
import Section3 from "./Section3";
import SectionFour from "./SectionFour";

const PainfulBegining = () => {
    return (
        <div className="bg-black relative">
            {/* Divider */}
            <div className="absolute sm:-mt-[6px]">
                <img
                    src="/Core/BDivider.png"
                    className="scale-75"
                    alt="Divider"
                />
            </div>

            {/* Main Section */}
            <div className="flex px-4 sm:px-20 w-full min-h-[650px] bg-cover bg-center relative">
                <div className="absolute inset-0"></div>

                <div className="relative z-10 w-full">
                    {/* Heading */}
                    <div className="text-center">
                        <h1
                            className="text-transparent bg-clip-text bg-gradient-to-r 
                                from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                                via-[#DDB56D] to-[#CE9D4B] 
                                text-xl sm:text-2xl md:text-3xl lg:text-[50px] italic font-bold uppercase mt-8 sm:mt-15"
                        >
                            <span className="text-white">A</span> Painful{" "}
                            <span className="text-white">Beginning</span>
                        </h1>

                        <img
                            src="/ConsistentMatrix/border.png"
                            className="w-[250px] sm:w-[400px] lg:w-[600px] h-[6px] sm:h-[8px] mx-auto"
                            alt="Border"
                        />
                    </div>

                    {/* Intro Section */}
                    <div className="flex flex-col justify-center lg:flex-row gap-8 lg:gap-30 items-center mt-8 lg:mt-10">
                        {/* Text */}
                        <div className="max-w-full sm:max-w-[550px] space-y-4 px-2 sm:px-0">
                            <div>
                                <span className="text-white flex flex-col text-center sm:text-left text-base sm:text-lg md:text-[20px]">
                                    <span>I didn't inherit an empire.</span>
                                    <span>Inherited the ashes of one.</span>
                                </span>
                            </div>

                            <div className="text-justify">
                                <span className="text-white text-sm sm:text-[15px] leading-relaxed">
                                    In <strong>1907</strong>, two brave visionaries –{" "}
                                    <strong>Ganga Ram Mohanlal Mittal</strong> and{" "}
                                    <strong>Shri Babulal Mittal</strong> – built{" "}
                                    <strong>India’s first brass rolling mill.</strong> What began
                                    as a small dream grew into the{" "}
                                    <strong>mighty Mittal Group,</strong> a symbol of strength,
                                    jobs, and national pride.
                                </span>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="flex flex-row gap-4 sm:gap-6 lg:gap-10 mt-4 lg:mt-0">
                            <img
                                src="/Member/m1.png"
                                className="w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] rounded-md"
                                alt="Member 1"
                            />
                            <img
                                src="/Member/m2.png"
                                className="w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] rounded-md"
                                alt="Member 2"
                            />
                        </div>
                    </div>

                    {/* Long Text Section */}
                    <div className="flex w-full justify-center items-center">
                        <div className="text-white mt-8 lg:mt-10 text-sm sm:text-[15px] flex flex-col space-y-3 sm:space-y-4 text-justify leading-relaxed w-full sm:w-[90%] lg:w-[1030px] px-4 sm:px-0">
                            <span>But success doesn’t always last forever.</span>
                            <span>
                                By 2003, after decades of internal disputes and poor financial
                                decisions, the empire collapsed. The ₹1,000 crore dream faded
                                into bankruptcy – the same year I was born.
                            </span>
                            <span>
                                My father, once a proud industrialist, sank into depression. But
                                in that darkness, my mother became our light – a symbol of grace,
                                strength, and unbreakable love.
                            </span>
                            <span>I grew up with responsibilities, not toys.</span>
                            <span>
                                In 2011, my grandmother passed away, and my mother made the bold
                                decision to leave our family home — starting over from scratch.
                            </span>
                            <span>
                                I ran errands. I stood by her. I learned resilience, empathy, and
                                the fire to build something of my own.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sections */}
            <div className="mt-8 lg:mt-15 px-4 sm:px-10">
                <img src="/Core/rectangle.png" alt="rectangle" />
            </div>

            <section>
                <Rebellion />
            </section>

            <div className="mt-4 lg:mt-5 px-4 sm:px-10">
                <img src="/Core/rectangle.png" alt="rectangle" />
            </div>

            <section>
                <Section3 />
            </section>

            <div className="mt-4 lg:mt-5 px-4 sm:px-10">
                <img src="/Core/rectangle.png" alt="rectangle" />
            </div>

            <section>
                <SectionFour />
            </section>

            <div className="absolute bottom-5 lg:bottom-7 px-4 sm:px-10 ">
                <img src="/Core/rectangle.png" alt="rectangle" />
            </div>
        </div>
    );
};

export default PainfulBegining;
