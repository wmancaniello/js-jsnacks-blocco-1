// Il software deve chiedere per 10 volte all'utente di inserire un numero;
// Il programma stampa la somma di tutti i numeri inseriti.

//  Modo mio

//  RACCOLTA DATI:
// const num1 = parseInt(prompt("Inserisci il primo numero:"));
// console.log(num1);

// const num2 = parseInt(prompt("Inserisci il secondo numero:"));
// console.log(num2);

// const num3 = parseInt(prompt("Inserisci il terzo numero:"));
// console.log(num3);

// const num4 = parseInt(prompt("Inserisci il quarto numero:"));
// console.log(num4);

// const num5 = parseInt(prompt("Inserisci il quinto numero:"));
// console.log(num5);

// const num6 = parseInt(prompt("Inserisci il sesto numero:"));
// console.log(num6);

// const num7 = parseInt(prompt("Inserisci il settimo numero:"));
// console.log(num7);

// const num8 = parseInt(prompt("Inserisci il ottavo numero:"));
// console.log(num8);

// const num9 = parseInt(prompt("Inserisci il nono numero:"));
// console.log(num9);

// const num10 = parseInt(prompt("Inserisci il decimo numero:"));
// console.log(num10);

// SOMMA TOTALE
// const sumNumber = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
// console.log(`La somma totale dei numeri inseriti è: ${sumNumber}`);

//  Modo Olga

let sum = 0; //  18
let isError = false;
for (let i = 0; i < 10; i++) {
  //  i = 10, il ciclo verrà eseguito 10 volte
  const num = parseInt(prompt("Dimmi un numero")); //
  console.log(num, isNaN(num));
  if (!isNaN(num)) {
    sum = sum + num; //
  } else {
    isError = true;
    break;
  }
}

// OUTPUT
//  true
if (isError) {
  alert("Hai sbagliato nell'inserimento dati, riprova ricaricando la pagina!");
} else {
  console.log(`La somma dei numeri è: ${sum}`); // 18
}
