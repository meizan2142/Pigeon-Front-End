const AllFacilities = () => {
    const cards = [
        {
            title: "EXECUTIVE MEMBERS",
            description: "A list of our Prized Members.",
            icon: "🏅",
        },
        {
            title: "CLUB MEMBERS",
            description: "Take a look at our Lovely Members.",
            icon: "🤝",
        },
        {
            title: "TOP PIGEONS",
            description: "Collection of the best Racing Pigeons.",
            icon: "🐦",
        },
    ];

    return (
        <section className="bg-[#0D1230] text-white lg:mx-auto lg:w-[1440px] desktop:w-full mx-auto mt-24 p-20 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full">
                <h2 className="text-5xl font-bold mb-10 text-center">Get All Facilities In One Station</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white hover:text-white hover:bg-[#AC8D68] transition-all ease-in-out text-black rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                        >
                            <div className="text-4xl sm:text-5xl mb-4">{card.icon}</div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-sm sm:text-base">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllFacilities