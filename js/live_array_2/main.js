//Chiedo all'utente un numero e stampo in console, il successivo

/* 
STRUMENTI

prompt
console.log
*/

const askNum = parseInt(prompt('Digita un numero'))
const nextNum = askNum + 1;

console.log('Il numero che hai scelto è:', askNum);
console.log('Il numero successivo a quello che hai scelto è:', nextNum);