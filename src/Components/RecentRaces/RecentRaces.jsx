const Testimonials = () => {
    return (
        <section className="mt-24 bg-[#EFE7E0]">
            <div className="max-w-6xl px-6 py-12 mx-auto">
                <h1 className="text-black existingHeading text-4xl text-center font-bold pb-5">Testimonial</h1>

                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-[#F7F2EE] -z-10 md:h-96 rounded-2xl"></div>

                    <div className="w-full p-6  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://i.ibb.co.com/hmZHbgh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg" alt="client photo" />

                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-2xl font-medium tracking-tight text-black">Imran Azad</p>
                                <p className="text-black "><i>President of BPRFC</i></p>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-black md:text-xl">Dhaka, the capital city of Bangladesh where more then 30,000 pigeon fanciers of different categories. In the year of 2003 some of our pigeon fanciers have started to develop Racing Pigeon in Dhaka-Bangladesh.</p>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Testimonials;