// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// 1. Chiedo all'utente di inserire due numeri
const word1 = prompt("Inserisci la prima parola:");
console.log(word1);
const word2 = prompt("Inserisci la seconda parola:");
console.log(word2);

//  Condizionale per determinare qual'è la parola più lunga

let long;
let short;
let same = false;

if (word1.length > word2.length) {
  long = word1;
  short = word2;
} else if (word1.length < word2.length) {
  long = word2;
  short = word1;
} else {
  same = true;
}

//  stampa
if (same === true) {
  console.log("Le parole sono uguali di lunghezza");
} else {
  console.log(`La parola più corta è ${short}`);
  console.log(`La parola più lunga è ${long}`);
}
