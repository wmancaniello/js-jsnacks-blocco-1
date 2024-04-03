// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby:
// Chiedi all'utente il suo nome;
// Comunicagli se può partecipare o no alla festa.

// Metodo for

// Array degli invitati
// const partyGuests = [
//   "Jay",
//   "Nick",
//   "Daisy",
//   "Tom",
//   "Jordan",
//   "Myrtle",
//   "George",
//   "Meyer",
// ];

// Chiedo il nome all'utente tramite prompt
// const userName = prompt("Inserisci il tuo nome:");
// console.log(userName);

//  Inserisco una variabile d'appoggio false
// let guest = false;

// Controllo se il nome dell'utente è presente nell'array degli invitati
// for (let i = 0; i < partyGuests.length; i++) {
//     if (partyGuests[i] === userName) {
//         guest = true;
//         break;
//     }
// }

//  Stampo il risultato, quindi se può partecipare o no alla festa
// if (guest) {
//     console.log("Puoi partecipare alla festa!");
// } else {
//     console.log("Mi dispiace, ma non puoi partecipare alla festa :(");
// }

//  Metodo while

const partyGuests = [
  //  array
  "Jay",
  "Nick",
  "Daisy",
  "Tom",
  "Jordan",
  "Myrtle",
  "George",
  "Meyer",
];

//Input
//  Chiedere all'utente il suo nome
const userName = prompt("Dimmi il tuo nome"); //  string

//  Per ogni elemento dell'array
//      Per ogni elemento dell'array
//      Se l'elemento è uguale al nome utente
//          isFound è uguale a true
//      Incrementare l'indice dell'array

let i = 0;
let isFound = false;
while (i < partyGuests.length && !isFound) {
  const curGuest = partyGuests[i];
  //   console.log(curGuest);

  if (curGuest === userName) {
    isFound = true;
  }

  i++;
}

if (isFound) {
  console.log("Puoi entrare!");
} else {
  console.log("Mi dispiace ma non puoi entrare.");
}
