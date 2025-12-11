import { useEffect, useState } from "react";
import foyersService from "../../../services/foyersService.mock";
import { Foyer } from "../../../types/types";
import SearchBar from "../../ui/SearchBar";

export default function FoyerListWeb() {
  const [foyers, setFoyers] = useState<Foyer[]>([]);
  const [filteredFoyers, setFilteredFoyers] = useState<Foyer[]>([]);
  const [activeFoyer, setActiveFoyer] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await foyersService.getFoyers();
        setFoyers(data);
        setFilteredFoyers(data);
      } catch (error) {
        console.error("impossible de charger les foyers :", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    const results = foyers.filter((f) => f.nom.toLowerCase().includes(lower));
    setFilteredFoyers(results);
  }, [search, foyers]);

  const handleClick = async (foyer: Foyer) => {
    setActiveFoyer(foyer.id);
    const item = Office.context.mailbox.item;

    if (item?.itemType === Office.MailboxEnums.ItemType.Appointment) {
      try {
        await item.subject.setAsync(`[Visite] ${foyer.nom}`);

        if (foyer.adresse && foyer.adresse.trim() !== "") {
          await item.location.setAsync(foyer.adresse);
        } else {
          console.warn("Adresse invalide pour le foyer :", foyer.nom);
        }

        await item.body.setAsync(
          `Création de rendez-vous pour ${foyer.nom}`,
          { coercionType: Office.CoercionType.Text }
        );
      } catch (error) {
        console.error("Erreur lors de la modification du rendez-vous :", error);
      }
    } else {
      Office.context.mailbox.displayNewAppointmentForm({
        subject: `[Visite] ${foyer.nom}`,
        location: foyer.adresse || "adresse à définir",
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
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredFoyers.map((foyer) => (
        <button
          key={foyer.id}
          onClick={() => handleClick(foyer)}
          className={`foyer-button ${activeFoyer === foyer.id ? " active" : ""}`}
        >
          {foyer.nom}
        </button>
      ))}
    </div>
  );
}