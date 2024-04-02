//  n è un numero indicato dall'utente;
//  Stampa il cubo dei primi n numeri.

//  Chiedo un numero all'utente:
const userNumber = parseInt(prompt("Dimmi un numero:"));

//  Creo un ciclo che mi calcoli il cubo dei numeri dall'1 al numero inserito dall'utente

for (let i = 1; i <= userNumber; i++) {
  //  ** equivale all'esponente, è come scrivere i * i * i
  let cubo = i ** 3;
  console.log(`Il cubo di: ${i} è = ${cubo}`);
}
