import React from "react";

const Book = () => {
    return (
        <div className="bg-black py-16 px-5 sm:px-20">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] justify-center items-center gap-14 lg:gap-20">


                <div className="shadow-lg border-4 mt-12 border-[#D0A151] rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
                    <img
                        src="/Book/Book.png"
                        alt="Book"
                        className="w-[350px] sm:w-[350px] lg:w-[400px] sm:h-[500px] object-cover"
                    />
                </div>


                <div className="max-w-[520px] text-left">


                    <button className="text-[#D0A151] mt-12 bg-[#FDAA5633] font-semibold border border-[#D0A151] px-5 py-2 rounded-full text-xs tracking-wide mb-5">
                        LATEST PUBLICATION
                    </button>


                    <h2
                        className="text-transparent bg-clip-text 
                        bg-gradient-to-r from-[#D0A151] to-[#FFFFFF]
                        text-[30px] sm:text-[38px] lg:text-[42px] font-bold leading-snug mb-4"
                    >
                        Mastering Success in <br />
                        Contact Centres
                    </h2>


                    <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                        Unlock the secrets to exceptional customer service and professional
                        excellence. This comprehensive guide provides proven strategies,
                        real-world case studies, and actionable insights for contact
                        center leaders and professionals.
                    </p>


                    <ul className="list-disc list-inside text-white/80 text-[14px] mb-8 space-y-2">
                        <li>Strategic framework for contact center optimization</li>
                        <li>Boost customer service success stories</li>
                        <li>Leadership strategies for team motivation</li>
                        <li>Technology integration for digital transformation</li>
                    </ul>


                    <div className="flex sm:flex-row gap-4">

                        <button className="bg-[#D0A151] text-[8px] px-5 cursor-pointer sm:text-[12px] flex items-center gap-2 text-black font-semibold sm:px-5 py-2 rounded-full hover:opacity-90 transition">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7727 12.5V15.8333C17.7727 16.2754 17.5971 16.6993 17.2845 17.0118C16.972 17.3244 16.5481 17.5 16.106 17.5H4.43937C3.99734 17.5 3.57342 17.3244 3.26086 17.0118C2.9483 16.6993 2.77271 16.2754 2.77271 15.8333V12.5" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.10596 8.33398L10.2726 12.5007L14.4393 8.33398" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.2727 12.5V2.5" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            DOWNLOAD FREE SAMPLE
                        </button>


                        <button className="border border-[#D0A151] text-[#D0A151] flex items-center gap-2 px-5 py-2 text-[12px] rounded-full  transition">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.77279 14C1.55177 14 1.33981 13.9122 1.18353 13.7559C1.02725 13.5996 0.939453 13.3877 0.939453 13.1667V2.33333C0.939453 2.11232 1.02725 1.90036 1.18353 1.74408C1.33981 1.5878 1.55177 1.5 1.77279 1.5H5.93945C6.82351 1.5 7.67135 1.85119 8.29648 2.47631C8.9216 3.10143 9.27279 3.94928 9.27279 4.83333C9.27279 3.94928 9.62398 3.10143 10.2491 2.47631C10.8742 1.85119 11.7221 1.5 12.6061 1.5H16.7728C16.9938 1.5 17.2058 1.5878 17.362 1.74408C17.5183 1.90036 17.6061 2.11232 17.6061 2.33333V13.1667C17.6061 13.3877 17.5183 13.5996 17.362 13.7559C17.2058 13.9122 16.9938 14 16.7728 14H11.7728C11.1097 14 10.4739 14.2634 10.005 14.7322C9.53618 15.2011 9.27279 15.837 9.27279 16.5C9.27279 15.837 9.00939 15.2011 8.54055 14.7322C8.07171 14.2634 7.43583 14 6.77279 14H1.77279Z" stroke="#D0A151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            READ ONLINE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
