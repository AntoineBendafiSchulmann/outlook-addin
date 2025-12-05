import { Foyer } from "../types/types";

const mockFoyersService = {
  getFoyers: async (): Promise<Foyer[]> => {
    return Promise.resolve([
      {
        id: "1",
        nom: "Foyer République",
        adresse: "8 place de la République, 75010 Paris",
      },
      {
        id: "2",
        nom: "Foyer Lyon",
        adresse: "12 rue de Lyon, 75012 Paris",
      },
      {
        id: "3",
        nom: "Foyer Montparnasse",
        adresse: "18 boulevard Montparnasse, 75006 Paris",
      },
      {
        id: "4",
        nom: "Foyer Belleville",
        adresse: "55 rue de Belleville, 75020 Paris",
      },
      {
        id: "5",
        nom: "Foyer Nation",
        adresse: "3 avenue de la République, 75011 Paris",
      },
      {
        id: "6",
        nom: "Foyer Bastille",
        adresse: "27 rue du Faubourg Saint-Antoine, 75011 Paris",
      },
      {
        id: "7",
        nom: "Foyer Champs-Élysées",
        adresse: "42 avenue des Champs-Élysées, 75008 Paris",
      },
    ]);
  },
};

export default mockFoyersService;