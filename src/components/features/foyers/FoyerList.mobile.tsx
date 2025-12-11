import { useState, useEffect } from "react";

const foyers = ["Foyer 1", "Foyer 2", "Foyer 3", "Foyer 4", "Foyer 5", "Foyer 6", "Foyer 7"];

export default function FoyerListMobile() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isReadonly, setIsReadonly] = useState(false);

  useEffect(() => {
    const host = Office.context?.mailbox?.diagnostics?.hostName;
    if (host?.includes("OutlookIOS") || host?.includes("OutlookAndroid")) {
      setIsReadonly(true);
    }
  }, []);

  const handleClick = (nom: string) => {
    setSelected(nom);
    setIsReadonly(true);
  };

  return (
    <div className="foyer-container">
      <h1>Foyers disponibles</h1>
      {foyers.map((nom) => (
        <button
          key={nom}
          onClick={() => handleClick(nom)}
          className={`foyer-button${selected === nom ? " active" : ""}`}
        >
          {nom}
        </button>
      ))}
      {isReadonly && <p className="readonly-info">Lecture seule sur mobile.</p>}
    </div>
  );
}