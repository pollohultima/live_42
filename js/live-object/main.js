// Nuova sintasi per la creazione di un oggetto con variabili

const username = 'Matteo';
const age = '27';
const job = 'student';

const student = {
    username,
    age,
    job
}

console.log(student);

//Chiave dinamica
/* 
let userName = 'paolo';
let userAge = '30';
let userEmail = 'paolo@email.com';
let userPW = '1234';

const nameKey = 'userAge';

const studente = {
    userName: userName,  //chiave scritta usando il nome della chiae sena virgolette
    [nameKey]: userAge, //chiave dinamica
    'userEmail': userEmail, //chiave con virgolette
    userPW //solo richiamando la chiave
}; */

/* console.log(studente); */


//Oggetto destrutturato

/* const luke = {
    userName: 'Luke',
    userAge: 30,
    userEmail: 'paolo@email.com'
}

const { userName, userEmail } = luke

console.log(userName, userEmail); */



//Operatore Rest

/* function sum(...params) { // '...' sono operatore Spread
    console.log(params);
    let sum = 0;
    for (let index = 0; index < params.length; index++) {
        const number = params[index];
        sum += number
    }
    return sum
}


console.log(sum(1, 4, 5)); */

//Spread

const bike = { nome: 'btwin', color: 'red', gears: 10 };
const proBike = { ...bike, weight: 8 }

console.log(bike);
console.log(proBike);