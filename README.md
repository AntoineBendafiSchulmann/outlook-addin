# Outlook Add-in

## Description

Ce projet est un complément Outlook permettant d'afficher une liste de foyers. Il utilise TypeScript, Webpack et les API Office.js

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

## Développement local

Serveur HTTPS local :

```bash
npx http-server ./public -S -C "%USERPROFILE%\.office-addin-dev-certs\localhost.crt" -K "%USERPROFILE%\.office-addin-dev-certs\localhost.key" -p 3000
```

Charger le complément dans outlook :

```bash
npm run start:outlook
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
