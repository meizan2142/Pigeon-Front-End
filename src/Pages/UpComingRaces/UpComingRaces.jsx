import { useQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";
import { getProducts } from "../../data/data";
import { useState } from "react";

const UpComingRaces = () => {
    const [query, setQuery] = useState("");
    const { data: races, isLoading, error } = useQuery({
        queryKey: ["races"],
        queryFn: getProducts,
    });

    if (isLoading)
        return (
            <div className="text-center my-96">
                <SyncLoader color="#36D2B4" />
            </div>
        );
    if (error)
        return (
            <div className="text-center text-red-500">
                Error: {error.message}
            </div>
        );


    // ✅ Fix: Ensure `races.record` exists before filtering
    const filteredData =
        races?.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.club_name.toLowerCase().includes(query.toLowerCase()) ||
                item.ring_no.toString().includes(query)
        ) || [];

    return (
        <div className="min-h-screen p-8 sm:p-16 bg-[#AC8D68] pt-32">
            <div className="container p-4 mx-auto dark:text-gray-800">
                <div className="flex flex-col sm:flex-row justify-end items-center gap-2 mb-8">
                    <p className="text-black font-bold">Search by:</p>
                    <input
                        type="text"
                        placeholder="Search by name, club, or ring number..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="border outline-none border-black rounded-lg p-2 w-full sm:w-80"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left whitespace-nowrap">
                        <thead className="">
                            <tr className="bg-gray-300">
                                <th className="p-4 sm:p-3">Position</th>
                                <th className="p-4 sm:p-3">Member Name</th>
                                <th className="p-4 sm:p-3">Club Name</th>
                                <th className="p-4 sm:p-3">Ring No</th>
                                <th className="p-4 sm:p-3">Distance (km)</th>
                                <th className="p-4 sm:p-3">Trapping Time</th>
                                <th className="p-4 sm:p-3">Total Time</th>
                                <th className="p-4 sm:p-3">Velocity</th>
                            </tr>
                        </thead>
                        <tbody className="border-b bg-gray-50 border-gray-300">
                            {filteredData.length > 0 ? (
                                filteredData.map((race, index) => (
                                    <tr key={race._id || index} className="text-center text-sm sm:text-base">
                                        <td className="px-2 sm:px-3 text-lg font-medium text-gray-600">{race.rank || "N/A"}</td>
                                        <td className="px-2 sm:px-3 py-2">{race.name || "N/A"}</td>
                                        <td className="px-2 sm:px-3 py-2">{race.club_name || "N/A"}</td>
                                        <td className="px-2 sm:px-3 py-2">{race.ring_no || "N/A"}</td>
                                        <td className="px-2 sm:px-3 py-2">{race.distance || "N/A"}</td>
                                        <td className="px-2 sm:px-3 py-2">{race.trapping_time || "N/A"}</td>
                                        <td className="px-2 sm:px-3 py-2">{race.total_time || "N/A"}</td>
                                        <td className="px-2 sm:px-3 py-2">{race.velocity || "N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center p-4 text-gray-500">
                                        No results found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpComingRaces;
