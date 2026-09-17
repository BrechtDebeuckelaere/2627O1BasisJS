//opgave 1
const getallen = [2, 5, 8, 12];
const vermenigvuldigd = getallen.map((getal) => getal * 2);
console.log(vermenigvuldigd);

//opgave 2
const cijfers = [4, 7, 9, 3, 6, 5];
const gefilterdeNum = cijfers.filter((getal) => getal >= 5.5);
console.log(gefilterdeNum);

//opgave 3
const namen = ["Tim", "Sanne", "Anouk", "Bram"];
const gezochteNaam = namen.find((naam) => naam[0] == "A");
console.log(gezochteNaam);

//opgave 4
const prijzen = [10, 25, 5, 15];
const totalePrijs = prijzen.reduce(
  (numToAdd, currVal) => numToAdd + currVal,
  0,
);
console.log(totalePrijs);

//opgave 5
const dieren = ["kat", "hond", "konijn"];
dieren.forEach((dier) => {
  console.log("Dier:", dier);
});
