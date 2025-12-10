import { useState } from "react";
import FoyerListWeb from "./FoyerList.web";
import ActivitiesList from "./ActivitiesList";
import PageSwitcher from "./PageSwitcher";
import SettingsPage from "./SettingsPage";

export default function MainPanel() {
  const [page, setPage] = useState<"foyers" | "activites" | "parametres">("foyers");

  return (
    <div>
      <PageSwitcher activePage={page} setPage={setPage} />
      {page === "foyers" && <FoyerListWeb />}
      {page === "activites" && <ActivitiesList />}
      {page === "parametres" && <SettingsPage />}
    </div>
  );
}