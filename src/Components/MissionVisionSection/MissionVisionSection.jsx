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
