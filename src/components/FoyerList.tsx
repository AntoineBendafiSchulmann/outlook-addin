const foyers = ["Foyer 1", "Foyer 2", "Foyer 3", "Foyer 4"];

export default function FoyerList() {
  const handleClick = (nom: string) => {
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

  return (
    <div>
      <h1>Foyers disponibles</h1>
      {foyers.map(nom => (
        <button
          key={nom}
          onClick={() => handleClick(nom)}
          className="foyer-button"
        >
          {nom}
        </button>
      ))}
    </div>
  );
}