import ReactDOM from "react-dom/client";
import FoyerList from "./components/FoyerList";
import ActivitiesList from "./components/ActivitiesList";

Office.onReady(() => {
  const container = document.getElementById("foyer-list");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <>
        <FoyerList />
        <ActivitiesList />
      </>
    );
  }
});
