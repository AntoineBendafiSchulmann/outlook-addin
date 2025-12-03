import ReactDOM from "react-dom/client";
import FoyerListWeb from "./components/FoyerList.web";
//import FoyerListMobile from "./components/FoyerList.mobile";
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
        {/*<FoyerListMobile /> */}
        <ActivitiesList />
      </>
    );
  }
});
