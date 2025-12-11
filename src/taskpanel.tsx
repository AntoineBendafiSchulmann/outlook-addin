import ReactDOM from "react-dom/client";
import MainPanel  from "./components/layout/MainPanel";

Office.onReady(() => {
  const container = document.getElementById("foyer-list");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<MainPanel  />);
  }
});