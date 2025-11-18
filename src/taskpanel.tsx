import ReactDOM from "react-dom/client";
import FoyerListWeb from "./components/FoyerList.web";
//import FoyerListDesktop from "./components/FoyerList.desktop";
import ActivitiesList from "./components/ActivitiesList";

Office.onReady(() => {
  const container = document.getElementById("foyer-list");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <>
        <FoyerListWeb />
        {/* <FoyerListDesktop /> */}
        <ActivitiesList />
      </>
    );
  }
});
