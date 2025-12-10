import { useState } from "react";
import Card from "./Card";
import Toggle from "./Toggle";

export default function SettingsPage() {
  const [autoSubject, setAutoSubject] = useState(true);
  const [autoLocation, setAutoLocation] = useState(true);
  const [autoBody, setAutoBody] = useState(false);

  return (
    <div>

      <Card title="Sujet">
        <p>
          Active ou désactive l’insertion automatique du sujet lors de la création du rendez-vous.
        </p>
        <Toggle
          checked={autoSubject}
          onChange={() => setAutoSubject(!autoSubject)}
          label="Activer l’injection automatique du sujet"
        />
      </Card>

      <Card title="Lieu">
        <p>
          Ajoute automatiquement l’adresse du foyer dans le champ “Lieu” du rendez-vous.
        </p>
        <Toggle
          checked={autoLocation}
          onChange={() => setAutoLocation(!autoLocation)}
          label="Insérer automatiquement l’adresse du foyer"
        />
      </Card>

      <Card title="Description">
        <p>
          Insère une description préformatée dans la partie "Notes" du rendez-vous.
        </p>
        <Toggle
          checked={autoBody}
          onChange={() => setAutoBody(!autoBody)}
          label='Ajouter "Création de rendez-vous pour [foyer]"'
        />
      </Card>

      <Card title="Fonctionnement / Guide d’utilisation">
        <p>
          Découvrez comment fonctionne l’outil et comment paramétrer l’injection automatique des données.
        </p>
        <a href="#" className="learn-more-link">En savoir plus</a>
      </Card>

    </div>
  );
}