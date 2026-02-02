// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. //
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole //

// 1. il prezzo del biglietto è definito in base ai km (0.21 € al km) //
// 2. va applicato uno sconto del 20% per i minorenni //
// 3. va applicato uno sconto del 40% per gli over 65. //
// 4. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, //
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. //

// TIP: //
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue: //

// 100km, 10 anni => prezzo corretto:  €16.80 //
// 100km, 70 anni => prezzo corretto: €12.60 //

// SVOLGIMENTO //
// CREATED VARIABLES //
let eta = Number(prompt("Inserire l'età del passeggero"));
console.log("Età Inserita", eta);

let chilometri = Number(prompt("Inserisci i chilometri da percorrere"));
console.log("Chilometri Inseriti", chilometri);

const prezzoPerKm = 0.21;

// 1. POINT //
let prezzoTotale = (chilometri * prezzoPerKm).toFixed(2);

// 2. 3. POINT //
if (eta < 18) {
  prezzoTotale = prezzoTotale * 0.8;
} else if (eta > 65) {
  prezzoTotale = prezzoTotale * 0.6;
}

// 4. POINT //
console.log("Il costo totale del biglietto è:", prezzoTotale.toLocaleString("it-IT", {
  style: "currency",
  currency: "EUR",
})); 


