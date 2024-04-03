// Chiedere all'utente un numero, controllare che l'input è valido, sennò richiedere numero affinchè l'input non sarà valido
let userNum;

do {
    userNum = parseInt(prompt("Dimmi un numero"));
} while (isNaN(userNum));

console.log(userNum);