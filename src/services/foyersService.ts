import apiClient from "../utils/apiClient";

const foyersService = {
  getFoyers: async () => {
    try {
      const response = await apiClient.get(`${process.env.FOYERS_API_URL}/foyers`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des foyers :", error);
      throw error;
    }
  },
};

export default foyersService;