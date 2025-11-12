import { useState } from "react";

const foyers = ["Foyer 1", "Foyer 2", "Foyer 3", "Foyer 4", "Foyer 5", "Foyer 6", "Foyer 7"];

export default function FoyerList() {
  const [activeFoyer, setActiveFoyer] = useState<string | null>(null);

  const handleClick = async (nom: string) => {
    try {
      setActiveFoyer(nom);
      const item = Office.context.mailbox.item;
      if (!item) {
        console.error("L'objet 'item' est indisponible dans ce contexte.");
        return;
      }

      await item.body.appendOnSendAsync(
        `Création de rendez-vous pour ${nom}`,
        { coercionType: Office.CoercionType.Text }
      );
      await item.location.setAsync("À définir");
      await item.subject.setAsync(`[Visite] ${nom}`);
    } catch (error) {
      console.error("Erreur lors de l'ajout du foyer :", error);
    }
  };

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