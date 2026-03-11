# 🇳🇱 Utrecht City Tour - Programme Scolaire

Ce projet contient la page web interactive servant de guide et de programme pour notre journée scolaire de découverte de la ville d'Utrecht (Pays-Bas) avec les élèves français et néerlandais.

## 🎯 Objectif du Projet

Fournir aux élèves un support moderne, dynamique et bilingue consultable facilement sur leur téléphone tout au long du parcours. La page détaille 14 points d'intérêts historiques et culturels que nous allons visiter.

## ✨ Fonctionnalités

- **📱 Design "Mobile-First"** : L'interface est conçue pour être parfaite sur les petits écrans de smartphone.
- **🎨 Thème "Van Gogh"** : Esthétique premium et moderne (style 2026), avec un fond animé représentant "La Nuit Étoilée" qui fond au défilement.
- **🗺️ Carte Interactive** : Intégration d'une carte personnalisée (Google My Maps) affichant précisément notre parcours dans Utrecht.
- **🗣️ Bilinguisme Anglais / Français** : Le texte principal est en anglais (pour que tout le groupe puisse le lire), avec des boutons permettant d'afficher instantanément la traduction française grâce à une animation fluide.
- **⚡ 100% Vanilla** : Construit uniquement en HTML, CSS et JavaScript. Pas de framework lourd ni de Node.js nécessaire.

## 📍 Les 14 Points d'Intérêts du Parcours

1. **Van Gogh : l'expérience immersive**
2. **Moulin historique (Molen de Ster)**
3. **Quartier Lombok (diversité culturelle)**
4. **Grande Mosquée d'Utrecht (Ulu Moskee)**
5. **Gare Centrale d'Utrecht**
6. **Het Bollendak (Stationsplein)**
7. **Hoog Catharijne (Temps Libre)**
8. **Oudegracht ("Vieux canal")**
9. **Bibliothèque d'Utrecht (Ancien bureau de poste)**
10. **Statue d'Anne Frank**
11. **Pandhof van de Dom**
12. **Runensteen van Jelling (Réplique)**
13. **Tour de la cathédrale (Domtoren)**
14. **Retour au bus**

## 🚀 Hébergement / GitHub Pages

Le site est hébergé via **GitHub Pages**. \
🔗 **Lien en ligne :** [https://opware2000.github.io/Utrecht_journey/](https://opware2000.github.io/Utrecht_journey/)

*Pour modifier ou republier le site, assurez-vous que les branches de déploiement GitHub Pages sont configurées sur le dossier racine (`/`) de la branche `main`.*

## 📂 Contenu du Dépôt

- `index.html` : Structure de la page et contenus des balises.
- `styles.css` : Tout le design (glassmorphism, animations, typographie).
- `app.js` : Les données textuelles du parcours et la logique de Reveal (apparition) et de traduction.
- `lieux_utrecht.csv` : Les coordonnées des points pour générer la carte Google My Maps.
