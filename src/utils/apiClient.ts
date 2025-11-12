import axios from "axios";

const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export default apiClient;