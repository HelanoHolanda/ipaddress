
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY

export const Api = axios.create({
    baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=`,
});


export default Api;