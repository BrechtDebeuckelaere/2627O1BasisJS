# JavaScript Array Functions - Gecombineerde Oefeningen

In deze documentatie vind je 3 uitdagendere opgaven waarin je meerdere JavaScript array functions (`map`, `filter`, `reduce`, `find`, `sort`, etc.) moet combineren in één ketting (chaining) of functie.

---

## Opgave 1: Totaalprijs van goedgekeurde producten

Gegeven is de volgende array met webshop-producten:

```javascript
const producten = [
  { naam: "Laptopscherm", prijs: 150, inVoorraad: true },
  { naam: "Muis", prijs: 25, inVoorraad: false },
  { naam: "Toetsenbord", prijs: 45, inVoorraad: true },
  { naam: "Kabel", prijs: 10, inVoorraad: false },
  { naam: "Headset", prijs: 80, inVoorraad: true },
];
```

**Opdracht:**

1. Filter alle producten die **wel in voorraad** zijn (`inVoorraad === true`).
2. Bereken de **totale som van de prijzen** van alleen deze op voorraad zijnde producten.

**Verwachte uitkomst:**  
`275` (150 + 45 + 80)

---

## Opgave 2: Geformatteerde namen van geslaagde studenten

Gegeven is een lijst met studenten en hun behaalde score:

```javascript
const studenten = [
  { naam: "emily", score: 48 },
  { naam: "Daan", score: 72 },
  { naam: "sophie", score: 85 },
  { naam: "Lars", score: 52 },
  { naam: "Lisa", score: 64 },
];
```

**Opdracht:**  
Schrijf een expressie die:

1. Alleen de studenten filtert die **geslaagd** zijn (score van **60 of hoger**).
2. Een nieuwe array van strings teruggeeft waarin hun naam in **hoofdletters** staat, geformatteerd als: `"STUDENT: [NAAM]"`.

**Verwachte uitkomst:**  
`["STUDENT: DAAN", "STUDENT: SOPHIE", "STUDENT: LISA"]`

---

## Opgave 3: Zoek en bereken gemiddelde leeftijd van volwassenen

Gegeven is een array met personen en hun leeftijden:

```javascript
const personen = [
  { naam: "Tom", leeftijd: 15 },
  { naam: "An", leeftijd: 24 },
  { naam: "Sven", leeftijd: 17 },
  { naam: "Karin", leeftijd: 36 },
  { naam: "Peter", leeftijd: 30 },
];
```

**Opdracht:**

1. Filter de personen die **18 jaar of ouder** zijn.
2. Bereken de **gemiddelde leeftijd** van deze volwassenen.

**Verwachte uitkomst:**  
`30` (Aangezien de volwassenen 24, 36 en 30 jaar zijn: (24 + 36 + 30) / 3 = 30)
