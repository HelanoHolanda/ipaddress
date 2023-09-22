

import axios from "axios";

export const Api = axios.create({
    baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_API_KEY}&ipAddress=8.8.8.8`,
});

