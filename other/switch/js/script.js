//  Chiedere all'utente un nome della frutta e dire qualche cosa su di essa

const userFruit = prompt("Dimmi un nome di un frutto");

// SWITCH === IF
switch (userFruit) {
    case "arancia":
        console.log("Arancia ha tanta vitamina C");
        break;

    case "mela":
    console.log("Una mela al giorno toglie il medico di torno");
        break;
    
        default:
            console.log("Non so nulla su questo frutto");
}

// IF === SWITCH

// if (userFruit === "arancia") {
//     console.log("Arancia ha tanta vitamina C");
// } else if (userFruit === "mela") {
//     console.log("Una mela al giorno toglie il medico di torno");
// } else {
//     console.log("Non so nulla su questo frutto");
// }
    
