# Node.js Modules - Oefeningen

In deze documentatie vind je 2 eenvoudige opgaven om te oefenen met het maken, exporteren en importeren van **CommonJS modules** in Node.js met behulp van `module.exports` en `require()`.

---

## Opgave 1: Een Rekenmodule Maken (`mathUtils.js`)

### Instructies:

1. Maak een nieuw bestand genaamd **`mathUtils.js`**.
2. Exporteer daarin twee functies:
   - `optellen(a, b)`: telt twee getallen op en geeft de som terug.
   - `vermenigvuldigen(a, b)`: vermenigvuldigt twee getallen en geeft het product terug.
3. Maak een tweede bestand genaamd **`app.js`**.
4. Importeer de functies uit `mathUtils.js` met behulp van `require('./mathUtils.js')`.
5. Roep beide functies aan met getallen naar keuze en print de resultaten naar de console.

### Verwachte uitvoer in de console (`node app.js`):

```text
Som: 12
Product: 35
```

---

## Opgave 2: Een Begroetingsmodule Maken (`begroeting.js`)

### Instructies:

1. Maak een nieuw bestand genaamd **`begroeting.js`**.
2. Exporteer één enkele functie via `module.exports = ...` die een `naam` als parameter accepteert en een string teruggeeft, zoals: `"Hallo, [naam]!"`.
3. Maak een tweede bestand genaamd **`index.js`**.
4. Importeer de functie uit `begroeting.js` met behulp van `require('./begroeting.js')`.
5. Roep de functie aan met een naam (bijvoorbeeld jouw eigen naam) en print het resultaat met `console.log()`.

### Verwachte uitvoer in de console (`node index.js`):

```text
Hallo, Alex!
```
