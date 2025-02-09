import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import { SyncLoader } from "react-spinners";

const fetchRaceDetails = async (id) => {
    const { data } = await axios.get(`https://pigeon-backend-two.vercel.app/upcomingRaces/${id}`);
    return data;
};
const RaceDetails = () => {
    const { id } = useParams();
    console.log("Race ID:", id); // ✅ Check if the ID is correct

    const { data: race, isLoading, error } = useQuery({
        queryKey: ["race", id],
        queryFn: () => fetchRaceDetails(id),
        enabled: !!id, // ✅ Ensure it fetches only when ID exists
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
    return (
        <div className="pt-8 bg-[#AC8D68] min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <div className="mt-2 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{race.club_name}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{race.name}</h2>
                </div>
                <p className="dark:text-gray-800">Ring No: {race.ring_no}</p>
                <p className="dark:text-gray-800">Race Distance: {race.distance} km</p>
                <p className="dark:text-gray-800">Ring No: {race.trapping_time}</p>
                <p className="dark:text-gray-800">Ring No: {race.total_time}</p>
                <p className="dark:text-gray-800">Ring No: {race.velocity}</p>
            </div>

        </div>
    )
}

export default RaceDetails