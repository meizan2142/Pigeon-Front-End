const MissionVisionSection = () => {
    return (
        <section className="bg-white py-10 mt-24 px-5 mobile:py-6 mobile:px-3 lg:px-28 lg:mx-auto lg:w-[1400px]">
            <div className="grid grid-cols-1 mobile:gap-6 lg:grid-cols-2 lg:w-[1200px] gap-10 items-center">
                {/* Left Side: Image and Overlay */}
                <div className="relative">
                    {/* Main Image */}
                    <img
                        src="https://i.ibb.co.com/pKQCXnS/section-inner-pigeon.jpg"
                        alt="Pigeons flying"
                        className="w-full h-auto rounded-lg"
                    />
                    {/* Overlay Content */}
                    <div className="absolute top-10 left-10 mobile:top-5 mobile:left-5 lg:top-48 lg:left-0 bg-[#AC8D68] border-white border-4 shadow-md rounded-lg p-4 mobile:p-3 lg:p-6 flex flex-col items-center w-[180px] mobile:w-[140px]">
                        {/* Circle Image */}
                        <div className="w-20 h-20 mobile:w-16 mobile:h-16 rounded-full overflow-hidden mb-4">
                            <img
                                src="https://i.ibb.co.com/LRV1TLH/pigeon-years-since-logo.jpg"
                                alt="Pigeon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-base mobile:text-sm font-semibold text-white">Since</p>
                        <p className="text-4xl mobile:text-3xl font-bold text-black">2003</p>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="text-center bg-[#F7F2EE] lg:text-left rounded-lg p-10 mobile:p-5 lg:p-20 w-full lg:w-[600px] h-auto lg:h-[625px]">
                    <h2 className="text-xl mobile:text-lg lg:text-4xl font-bold text-gray-800 mb-4 uppercase">
                        Mission and Vision
                    </h2>
                    <p className="text-base mobile:text-sm lg:text-xl font-semibold text-gray-600 mb-6">
                        To Be The Pioneer In Pigeon Racing With International Standards
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Take Part in Exciting Races",
                            "Place Your Bids in An Auction",
                            "Sell Your Pigeons Through Auction Events",
                            "Become a High Value Exclusive Member",
                            "Check out our Photo Gallery",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-gray-600 text-sm mobile:text-xs lg:text-lg"
                            >
                                <span className="text-[#AC8D68]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-4 h-4 mobile:w-3 mobile:h-3 lg:w-5 lg:h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button className="mt-6 px-4 py-2 mobile:px-3 mobile:py-1 bg-[#AC8D68] text-white rounded-lg hover:bg-[#8a744d] transition-all">
                        Read More
                    </button>
                </div>
            </div>
        </section>

    );
};

export default MissionVisionSection;
        // <section className="mt-24 bg-[#EFE7E0]">
        //     <div className="max-w-6xl px-6 py-12 mx-auto">
        //         <h1 className="text-black existingHeading text-4xl text-center font-bold pb-5">Testimonial</h1>

        //         <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
        //             <div className="absolute w-full bg-[#F7F2EE] -z-10 md:h-96 rounded-2xl"></div>

        //             <div className="w-full p-6  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
        //                 <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://i.ibb.co.com/hmZHbgh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg" alt="client photo" />

        //                 <div className="mt-2 md:mx-6">
        //                     <div>
        //                         <p className="text-2xl font-medium tracking-tight text-black">Golam Sarwar</p>
        //                         <p className="text-black "><i>President of CPRFC</i></p>
        //                     </div>

        //                     <p className="mt-4 text-lg leading-relaxed text-black md:text-xl">Dhaka, the capital city of Bangladesh where more then 30,000 pigeon fanciers of different categories. In the year of 2003 some of our pigeon fanciers have started to develop Racing Pigeon in Dhaka-Bangladesh.</p>
        //                 </div>
        //             </div>
        //         </main>
        //     </div>
        // </section>