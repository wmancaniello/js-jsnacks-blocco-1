//  Generare 5 numeri random diversi tra di loro, ognuno compreso tra 1 e 10 e salvarli in un array

const numArray = [];

while (numArray.length < 5) {
    // Genero un numero random
    const rndNum = Math.floor(Math.random() * 10) + 1;
    console.log(rndNum);

    // Se il numero non è incluso nell'array
    // Lo pusho nell'array
    if (!numArray.includes(rndNum)) {
        numArray.push(rndNum)
    }
}

console.log(numArray);
