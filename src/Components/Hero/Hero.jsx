import { useState } from "react";
import BgVideo from "../BgVideo/BgVideo";
import { getProducts } from "../../data/data";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom"; // ✅ Correct import

const Hero = () => {
    const [showCard, setShowCard] = useState(false);
    const [query, setQuery] = useState("");

    const { data: races } = useQuery({
        queryKey: ["races"],
        queryFn: getProducts,
    });

    // ✅ Ensure races exist before filtering
    const filteredData =
        races?.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.club_name.toLowerCase().includes(query.toLowerCase()) ||
                item.ring_no.toString().includes(query)
        ) || [];

    return (
        <div>
            <section className="relative w-full h-[80vh] md:h-screen">
                <div className="absolute w-full h-full">
                    {/* Show Video on Larger Screens */}
                    <div className="hidden md:block w-full h-full">
                        <BgVideo className="w-full h-full object-cover" />
                    </div>

                    {/* Show Image on Mobile Screens */}
                    <div className="block md:hidden w-full h-full">
                        <img
                            src="https://i.ibb.co.com/qw9ZxBP/closeup-selective-focus-shot-pigeons-park-with-greenery-181624-19755.jpg"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 bg-black bg-opacity-50 px-4">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        See The Latest Race Results
                    </h1>
                    <p className="text-xs sm:text-base lg:text-lg max-w-lg mb-8">
                        Discover amazing features and embark on an exciting journey with us.
                    </p>
                    <div className="flex flex-col sm:flex-row w-full max-w-sm md:max-w-md gap-2 sm:gap-0">
                        <div className="w-full max-w-sm mx-auto">
                            <input
                                id="id"
                                placeholder="Enter ID"
                                className="w-full rounded-md outline-none px-4 py-3 bg-transparent text-white border sm:border-r-0"
                                onFocus={() => setShowCard(true)}
                                onBlur={() => setTimeout(() => setShowCard(false), 200)} // ✅ Prevent closing too fast
                                onChange={(e) => setQuery(e.target.value)}
                            />

                            {/* Show results dynamically based on user input */}
                            {showCard && query && (
                                <div className="mt-2 p-4 border space-y-5 grid rounded-md bg-gray-800 text-white">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <NavLink
                                                key={item._id}
                                                to={`/race/${item._id}`} // ✅ Navigate to race details page
                                                className="block text-white hover:text-gray-300"
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))
                                    ) : (
                                        <p>No results found</p>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
