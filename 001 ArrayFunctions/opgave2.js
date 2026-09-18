//opgave 1
const producten = [
  { naam: "Laptopscherm", prijs: 150, inVoorraad: true },
  { naam: "Muis", prijs: 25, inVoorraad: false },
  { naam: "Toetsenbord", prijs: 45, inVoorraad: true },
  { naam: "Kabel", prijs: 10, inVoorraad: false },
  { naam: "Headset", prijs: 80, inVoorraad: true },
];

// het gebruik van map is hier overbodige rekenkracht.
// Gebruik filter in plaats van map
const totalePrijs = producten
  .filter((product) => product.inVoorraad)
  .reduce((numToAdd, currVal) => numToAdd + currVal.prijs, 0);
console.log(totalePrijs);

//opgave 2

// je doet een foreach om dan een push te doen.
// Eer bestaat een array function die dit in 1 keer doet.
const studenten = [
  { naam: "emily", score: 48 },
  { naam: "Daan", score: 72 },
  { naam: "sophie", score: 85 },
  { naam: "Lars", score: 52 },
  { naam: "Lisa", score: 64 },
];
const geslaagdeStudenten = [];
studenten
  .filter((punten) => {
    if (punten.score >= 60) {
      return true;
    }
  })
  .forEach((geslaagdeStudent) => {
    const geslaagdeStudentNaam = "student: " + geslaagdeStudent.naam;
    geslaagdeStudenten.push(geslaagdeStudentNaam);
  });
console.log(geslaagdeStudenten);

//opgave3

// Je geeft enkel de namen van de personen boven de 18.
// Ik verwacht de gemiddelde leeftijd van de personen boven de 18.
const personen = [
  { naam: "Tom", leeftijd: 15 },
  { naam: "An", leeftijd: 24 },
  { naam: "Sven", leeftijd: 17 },
  { naam: "Karin", leeftijd: 36 },
  { naam: "Peter", leeftijd: 30 },
];
gemiddeldeLeeftijd = personen
  .filter((persoon) => {
    if (persoon.leeftijd >= 18) {
      return true;
    }
  })
  .map((persoon) => persoon.naam);
console.log(gemiddeldeLeeftijd);
