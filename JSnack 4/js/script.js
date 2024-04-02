// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby:
// Chiedi all'utente il suo nome;
// Comunicagli se può partecipare o no alla festa.

// Array degli invitati
const partyGuests = [
  "Jay",
  "Nick",
  "Daisy",
  "Tom",
  "Jordan",
  "Myrtle",
  "George",
  "Meyer",
];

// Chiedo il nome all'utente tramite prompt
const userName = prompt("Inserisci il tuo nome:");
console.log(userName);

//  Inserisco una variabile d'appoggio false
let guest = false;

// Controllo se il nome dell'utente è presente nell'array degli invitati
for (let i = 0; i < partyGuests.length; i++) {
    if (partyGuests[i] === userName) {
        guest = true;
        break;
    }
}

//  Stampo il risultato, quindi se può partecipare o no alla festa
if (guest) {
    console.log("Puoi partecipare alla festa!");
} else {
    console.log("Mi dispiace, ma non puoi partecipare alla festa :(");
}