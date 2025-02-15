import { useState } from "react";
import BgVideo from "../BgVideo/BgVideo";
import { getProducts } from "../../data/data";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom"; // ✅ Correct import

const Hero = () => {
    const [query, setQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // ✅ Store query after button click
    const [showCard, setShowCard] = useState(false);

    const { data: races } = useQuery({
        queryKey: ["races"],
        queryFn: getProducts,
    });

    // ✅ Filter only when search button is clicked
    const filteredData =
        races?.filter(
            (item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.club_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.ring_no.toString().includes(searchQuery)
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

                    <div className="flex flex-col sm:flex-row w-full max-w-sm md:max-w-md gap-2">
                        {/* ✅ Search Input */}
                        <input
                            type="text"
                            placeholder="Enter ID"
                            className="w-full rounded-md outline-none px-4 py-3 bg-transparent text-white border"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {/* ✅ Search Button */}
                        <button
                            className="px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            onClick={() => {
                                setSearchQuery(query);
                                setShowCard(true);
                            }}
                        >
                            Search
                        </button>
                    </div>

                    {/* ✅ Show results only after clicking the button */}
                    {showCard && searchQuery && (
                        <div className="mt-2 p-4 w-[450px] border rounded-md bg-gray-800 text-white overflow-x-auto">
                            {filteredData.length > 0 ? (
                                <table className="w-full border-collapse text-sm sm:text-base">
                                    <thead>
                                        <tr className="bg-gray-700 text-gray-300">
                                            <th className="px-2 sm:px-3 py-2">Rank</th>
                                            <th className="px-2 sm:px-3 py-2">Loft Name</th>
                                            <th className="px-2 sm:px-3 py-2">Club Name</th>
                                            <th className="px-2 sm:px-3 py-2">Ring No</th>
                                            <th className="px-2 sm:px-3 py-2">Distance</th>
                                            <th className="px-2 sm:px-3 py-2">Velocity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item) => (
                                            <tr
                                                key={item._id}
                                                className="text-center border-b hover:bg-gray-700 transition"
                                            >
                                                <td className="px-2 sm:px-3 py-2 font-medium text-white">
                                                    {item.rank || "N/A"}
                                                </td>
                                                <td className="px-2 sm:px-3 py-2">
                                                    <NavLink
                                                        to={`/race/${item._id}`}
                                                        className="text-white hover:text-gray-300"
                                                    >
                                                        {item.name || "N/A"}
                                                    </NavLink>
                                                </td>
                                                <td className="px-2 sm:px-3 py-2">{item.club_name || "N/A"}</td>
                                                <td className="px-2 sm:px-3 py-2">{item.ring_no || "N/A"}</td>
                                                <td className="px-2 sm:px-3 py-2">{item.distance || "N/A"}</td>
                                                <td className="px-2 sm:px-3 py-2">{item.velocity || "N/A"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p className="text-center">No results found</p>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Hero;
