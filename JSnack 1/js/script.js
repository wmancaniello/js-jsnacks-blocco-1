//  L’utente inserisce due numeri in successione, con due prompt.
//  Il software stampa il maggiore.

// 1. Chiedo all'utente di inserire due numeri
const num1 = parseInt(prompt("Inserisci il primo numero:"));
console.log(num1);
const num2 = parseInt(prompt("Inserisci il secondo numero:"));
console.log(num2);


// Verifico quale dei due numeri è maggiore
if (num1 > num2) {
    console.log(`Il numero maggiore è ${num1}`);
} else if (num2 > num1) {
    console.log(`Il numero maggiore è ${num2}`);
} else {
    console.log(`I numeri sono uguali`);
}