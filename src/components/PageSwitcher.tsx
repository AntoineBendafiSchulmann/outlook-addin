interface PageSwitcherProps {
  activePage: "foyers" | "activites" | "parametres";
  setPage: (page: "foyers" | "activites" | "parametres") => void;
}

export default function PageSwitcher({ activePage, setPage }: PageSwitcherProps) {
  return (
    <div className="page-switcher">
      <button
        className={`page-button ${activePage === "foyers" ? "active" : ""}`}
        onClick={() => setPage("foyers")}
        title="Foyers"
      >
        📍
      </button>
      <button
        className={`page-button ${activePage === "activites" ? "active" : ""}`}
        onClick={() => setPage("activites")}
        title="Activités"
      >
        📋
      </button>
      <button
        className={`page-button ${activePage === "parametres" ? "active" : ""}`}
        onClick={() => setPage("parametres")}
        title="Paramètres"
      >
        ⚙️
      </button>
    </div>
  );
}