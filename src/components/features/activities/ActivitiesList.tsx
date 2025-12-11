import { useEffect, useState } from "react";
import activitiesService from "../../../services/activitiesService";
import { Activity } from "../../../types/types";

export default function ActivitiesList() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data: Activity[] = await activitiesService.getActivities();
        setActivities(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des activités :", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Liste des activités</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.subject}</li>
        ))}
      </ul>
    </div>
  );
}