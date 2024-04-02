// Stampa le potenze di 2 fino a 1000.

//  RACCOLTA DATI
//  button
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
  //  i=1 valore di partenza, i <=1000 condizione per far si che non superi 1000, i*=2 raddoppio del valore
  for (let i = 1; i <= 1000; i *= 2) {
    console.log(i);
  }
});
