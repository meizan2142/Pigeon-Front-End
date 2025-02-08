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
        races?.record?.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.club_name.toLowerCase().includes(query.toLowerCase()) ||
                item.ring_no.toString().includes(query)
        ) || [];

    return (
        <div className="min-h-screen p-32 bg-[#AC8D68]">
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="flex justify-end items-center gap-2 mb-8">
                    <p className="text-black font-bold">Search by:</p>
                    <input
                        type="text"
                        placeholder="Search by name, club, or ring number..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="border outline-none border-black rounded-lg p-2 appearance-none"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <thead>
                            <tr className="dark:bg-gray-300">
                                <th className="p-3">Position</th>
                                <th className="p-3">Member Name</th>
                                <th className="p-3">Club Name</th>
                                <th className="p-3">Ring No</th>
                                <th className="p-3">Distance (km)</th>
                                <th className="p-3">Trapping Time</th>
                                <th className="p-3">Total Time</th>
                                <th className="p-3">Velocity</th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            {filteredData.length > 0 ? (
                                filteredData.map((race, index) => (
                                    <tr key={index}>
                                        <td className="px-3 text-2xl font-medium dark:text-gray-600">
                                            {index + 1}
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{race.name}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span>{race.club_name}</span>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{race.ring_no}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{race.distance}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{race.trapping_time}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            {race.total_time}
                                        </td>
                                        <td className="px-3 py-2">
                                            {race.velocity}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="text-center p-4 text-gray-500"
                                    >
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
