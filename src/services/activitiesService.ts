import apiClient from "../utils/apiClient";

const activitiesService = {
  getActivities: async () => {
    try {
      const response = await apiClient.get(`${process.env.ACTIVITIES_API_URL}/activities`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des activités :", error);
      throw error;
    }
  },
};

export default activitiesService;