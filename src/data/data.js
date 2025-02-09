import axios from "axios";

export const getProducts = async () => {
    // const { data } = await axios.get("https://api.jsonbin.io/v3/qs/67a855c4acd3cb34a8db2bf6");
    const { data } = await axios.get("https://pigeon-backend-two.vercel.app/upcomingRaces");
    return data;
};