// Pari e Dispari

const pari_dispari = prompt('Pari o dispari?').toLowerCase();
const numero_utente = Number(prompt('digita un numero da 1 a 9'));

console.log(pari_dispari, numero_utente);


//Generare numero casuale compreso fra 1 e 9

const pc_number = Math.floor(Math.random() * 8) + 1;

console.log(pc_number);



//Stabilire chi vince
// Sommare i due numeri
const numero_finale = numero_utente + pc_number;

//Verficare se il numero è pari o dispari
if (numero_finale % 2 == 0) {
    console.log("numero pari", numero_finale);
    var risultato = 'pari'
} else {
    var risultato = 'dispari'
}

//Verificare se l'utente ha scelto pari o dispari
if (risultato == pari_dispari) {
    console.log('User Wins');
} else {
    console.log('PC Wins');
}

//Comunicare il vincitore