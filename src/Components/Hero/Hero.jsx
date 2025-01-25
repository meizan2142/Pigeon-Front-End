import BgVideo from "../BgVideo/BgVideo"

const Hero = () => {
    return (
        <div>
            <section className="relative w-full h-[80vh] md:h-screen">
                <div className="absolute desktop:w-full w-full lg:w-[1440px] h-full">
                    <BgVideo className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 bg-black bg-opacity-50 px-4">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        See The Latest Race Results
                    </h1>
                    <p className="text-xs sm:text-base lg:text-lg max-w-lg mb-8">
                        Discover amazing features and embark on an exciting journey with us.
                    </p>
                    <div className="flex flex-col sm:flex-row w-full max-w-sm md:max-w-md gap-2 sm:gap-0">
                        <input
                            id="id"
                            type="number"
                            placeholder="Enter ID"
                            className="w-full rounded-md outline-none px-4 py-3 text-black border sm:border-r-0"
                        />
                        <button
                            type="button"
                            className="px-6 py-3 font-semibold rounded-md sm:rounded-l-none bg-gray-800 text-white"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

        </div>


    )
}

export default Hero