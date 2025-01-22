import BgVideo from "../BgVideo/BgVideo"

const Hero = () => {
    return (
        <div>
            <section className="relative w-full h-screen">
                {/* Video Background */}
                <BgVideo />
                {/* Text Over Video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 bg-black bg-opacity-50">
                    <h1 className="text-5xl font-bold mb-6">See The Latest Race Results</h1>
                    <p className="text-lg max-w-2xl mb-8">
                        Discover amazing features and embark on an exciting journey with us.
                    </p>
                    <div className="col-span-full sm:col-span-2 flex">
                        <input id="id" type="number" placeholder="Enter ID" className="w-full rounded-md outline-none rounded-r-none px-4 py-3 text-black" />
                        <button type="button" className="px-8 py-3 font-semibold rounded-l-none rounded dark:bg-gray-800 dark:text-gray-100">Search</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero