# Node.js Modules - Praktische Oefeningen

In deze documentatie vind je 3 overzichtelijke opgaven om te oefenen met het maken, exporteren en importeren van **CommonJS modules** in Node.js.

---

## Opgave 1: Gebruikersbeheer Module (`userModule.js`)

### Instructies:
1. Maak een bestand **`userModule.js`**.
2. Maak daarin een interne array van gebruikers aan:
   ```javascript
   const gebruikers = ["Sanne", "Tim", "Anouk"];
   ```
3. Exporteer twee functies:
   - `getGebruikers()`: geeft de volledige lijst met gebruikers terug.
   - `voegGebruikerToe(naam)`: voegt een nieuwe naam toe aan de array.
4. Maak een bestand **`app.js`**. Importeer de twee functies, voeg een nieuwe naam toe (bijv. `"Bram"`) en print de bijgewerkte lijst in de console.

### Verwachte uitvoer in de console (`node app.js`):
```text
["Sanne", "Tim", "Anouk", "Bram"]
```

---

## Opgave 2: Rekenmachine met Geschiedenis (`calculator.js`)

### Instructies:
1. Maak een bestand **`calculator.js`**. Maak daarin een lege array `const geschiedenis = [];`.
2. Exporteer een object met de volgende functies:
   - `optellen(a, b)`: telt `a` en `b` op, slaat de berekening op als string (bijv. `"5 + 3 = 8"`) in de array `geschiedenis`, en geeft het resultaat terug.
   - `getGeschiedenis()`: geeft de array met alle opgeslagen berekeningen terug.
3. Maak een bestand **`index.js`**. Importeer de module, voer twee optellingen uit (bijv. `5 + 3` en `10 + 2`), en print de geschiedenis naar de console.

### Verwachte uitvoer in de console (`node index.js`):
```text
["5 + 3 = 8", "10 + 2 = 12"]
```

---

## Opgave 3: Configuratie Module (`config.js`)

### Instructies:
1. Maak een bestand **`config.js`** en exporteer een object met applicatie-instellingen:
   ```javascript
   module.exports = {
     appName: "Mijn Applicatie",
     poort: 3000,
     omgeving: "development"
   };
   ```
2. Maak een bestand **`server.js`**. Importeer het object uit `config.js`.
3. Print een geformatteerde melding in de console waarin je de waarden uit het geïmporteerde object gebruikt.
4. Zorg voor de mogelijkheid om de verschillende configuraties aan te passen

### Verwachte uitvoer in de console (`node server.js`):
```text
Mijn Applicatie draait op poort 3000 in development modus.
```