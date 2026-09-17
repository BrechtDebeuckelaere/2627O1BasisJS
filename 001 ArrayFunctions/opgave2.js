//opgave 1
const producten = [
  { naam: "Laptopscherm", prijs: 150, inVoorraad: true },
  { naam: "Muis", prijs: 25, inVoorraad: false },
  { naam: "Toetsenbord", prijs: 45, inVoorraad: true },
  { naam: "Kabel", prijs: 10, inVoorraad: false },
  { naam: "Headset", prijs: 80, inVoorraad: true },
];
const totalePrijs = producten
  .map((product) => {
    if (product.inVoorraad) {
      return product.prijs;
    } else {
      return 0;
    }
  })
  .reduce((numToAdd, currVal) => numToAdd + currVal, 0);
console.log(totalePrijs);

//opgave 2
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
