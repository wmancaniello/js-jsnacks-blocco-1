//  Calcola la somma e la media dei primi 10 numeri.

//  Dichiaro la variabile somma pari a 0, utilizzata come variabile d'appoggio
let somma = 0;

for (let i = 0; i <= 10; i++) {
  somma += i;
}

const media = somma / 10;

console.log(`La somma dei primi 10 numeri è ${somma}`);
console.log(`La media dei primi 10 numeri è ${media}`);
