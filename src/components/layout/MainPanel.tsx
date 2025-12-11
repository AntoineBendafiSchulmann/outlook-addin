import { useState } from "react";
import FoyerListWeb from "../features/foyers/FoyerList.web";
import ActivitiesList from "../features/activities/ActivitiesList";
import PageSwitcher from "../ui/PageSwitcher";
import SettingsPage from "./SettingsPage";
import FeedbackWidget from "../ui/FeedbackWidget";

export default function MainPanel() {
  const [page, setPage] = useState<"foyers" | "activites" | "parametres">("foyers");

  return (
    <>
      <div>
        <PageSwitcher activePage={page} setPage={setPage} />
        {page === "foyers" && <FoyerListWeb />}
        {page === "activites" && <ActivitiesList />}
        {page === "parametres" && <SettingsPage />}
      </div>
      <FeedbackWidget />
    </>
  );
}