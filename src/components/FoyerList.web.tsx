import { useState } from "react";

const foyers = ["Foyer 1", "Foyer 2", "Foyer 3", "Foyer 4", "Foyer 5", "Foyer 6", "Foyer 7"];

export default function FoyerList() {
  const [activeFoyer, setActiveFoyer] = useState<string | null>(null);

  const handleClick = async (nom: string) => {
    setActiveFoyer(nom);
    const item = Office.context.mailbox.item;

    if (item?.itemType === Office.MailboxEnums.ItemType.Appointment) {
      try {
        await item.body.setAsync(
          `Création de rendez-vous pour ${nom}`,
          { coercionType: Office.CoercionType.Text }
        );
        await item.location.setAsync("À définir");
        await item.subject.setAsync(`[Visite] ${nom}`);
      } catch (error) {
        console.error("Erreur lors de la modification du rendez-vous :", error);
      }
    } else {
      Office.context.mailbox.displayNewAppointmentForm({
        subject: `[Visite] ${nom}`,
        location: "À définir",
        body: "",
        start: new Date(),
        end: new Date(Date.now() + 30 * 60 * 1000),
        optionalAttendees: [],
        requiredAttendees: [],
        resources: []
      });
    }
  };

  return (
    <div>
      <h1>Foyers disponibles</h1>
      {foyers.map((nom) => (
        <button
          key={nom}
          onClick={() => handleClick(nom)}
          className={`foyer-button ${activeFoyer === nom ? " active" : ""}`}
        >
          {nom}
        </button>
      ))}
    </div>
  );
}
