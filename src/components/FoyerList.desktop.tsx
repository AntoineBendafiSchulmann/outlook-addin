import { useState } from "react";

const foyers = ["Foyer 1", "Foyer 2", "Foyer 3", "Foyer 4", "Foyer 5", "Foyer 6", "Foyer 7"];

export default function FoyerListDesktop() {
  const [activeFoyer, setActiveFoyer] = useState<string | null>(null);

  const handleClick = (nom: string) => {
    setActiveFoyer(nom);
    Office.context.mailbox.displayNewAppointmentForm({
      subject: `[Visite] ${nom}`,
      start: new Date(),
      end: new Date(Date.now() + 30 * 60 * 1000),
      body: `Création de rendez-vous pour ${nom}`,
      location: "À définir",
      optionalAttendees: [],
      requiredAttendees: [],
      resources: []
    });
  };

  console.log("Foyer actif :", activeFoyer);

  return (
    <div>
      <h1>Foyers disponibles</h1>
      {foyers.map((nom) => (
        <button
          key={nom}
          onClick={() => handleClick(nom)}
          className={`foyer-button ${activeFoyer === nom ? "active" : ""}`}
        >
          {nom}
        </button>
      ))}
    </div>
  );
}