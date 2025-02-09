import axios from "axios";

export const getProducts = async () => {
    // const { data } = await axios.get("https://api.jsonbin.io/v3/qs/67a855c4acd3cb34a8db2bf6");
    const { data } = await axios.get("http://localhost:5000/upcomingRaces");
    return data;
};