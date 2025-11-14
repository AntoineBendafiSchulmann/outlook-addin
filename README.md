# Outlook Add-in

## Description

Ce projet est un complément Outlook permettant d'afficher une liste de foyers activable depuis la fenêtre de saisie de rendez-vous. Il utilise TypeScript, Webpack et les API Office.js

## Installation

### Prérequis

- node.js
- npm
- outlook installé
- certificats de développement pour `.office-addin-dev-certs`

### Installation des certificats

exécutez la commande suivante dans votre terminal :

```bash
npx office-addin-dev-certs install
```

vérifiez l'installation :

Les fichiers `ca.crt`,`localhost.crt` et `localhost.key` seront créés dans le dossier suivant:

```
C:\Users\%USERPROFILE%\.office-addin-dev-certs
```

comme ceci :
![certificats](./public/assets/documentation/certificates-folder.png)

### Étapes

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/AntoineBendafiSchulmann/outlook-addin
   ```

   puis

   ```bash
    cd outlook-addin
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Build le projet
   ```bash
   npm run build
   ```

## Charger le complément dans outlook web :

cliquez sur le bouton "Plus d'applications"dans le "ruban"
![add_more_button](./public/assets/documentation/add_more_button.png)

cliquez sur télécharger des compléments
![download_complements](./public/assets/documentation/download_complements.png)

Allez dans l'onglet "Mes compléments" puis ajouter dans "Ajouter un complément personnalisé" , sélectionnez l'ajout à partir d'un fichier
![add_with_file](./public/assets/documentation/add_with_file.png)

Selectionnez le .xml web
![explorator](./public/assets/documentation/explorator.png)

le complément est à présent chargé
![result_downloaded_complement](./public/assets/documentation/result_downloaded_complement.png)

## Développement local

Serveur HTTPS local :

```bash
npm run serve
```

Charger le complément dans outlook desktop :

```bash
npm run start:outlook:desktop
```

puis cliquer sur "OK" pour enregistrer le complément

### Vider le cache d'Outlook

Si les modifications ne sont pas prises en compte, vous pouvez vider le cache d'Outlook avec les commandes suivantes :

1. accédez au dossier de cache :

```bash
cd $env:LOCALAPPDATA\Microsoft\Office\16.0\Wef
```

2. supprimez tout le contenu du dossier :

```bash
Remove-Item * -Recurse -Force
```

relancez Outlook après avoir vidé le cache pour voir les modifications
