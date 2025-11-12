import apiClient from "../utils/apiClient";

const personnesService = {
  getPersonnes: async () => {
    try {
      const response = await apiClient.get(`${process.env.PERSONS_API_URL}/personnes`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des personnes :", error);
      throw error;
    }
  },
};

export default personnesService;