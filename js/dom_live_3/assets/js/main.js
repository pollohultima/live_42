//Chiedo Nome e Sesso con 2 prompt diversi

//Visualizzo 'ciao' + nome utente

//Il nome deve essere blu o rosa in base al sesso

/* STRUMENTI
-h1 + 2span
-prompt
-GetElementById
-QuerySelector
-className
*/

const userName = prompt('Inserisci il tuo nome');
console.log(userName);

const userGender = prompt('Sei maschio o femmina? [M/F]')
console.log(userGender);

const nameElement = document.querySelector('h1>span');
nameElement.innerHTML = userName;

if (userGender == 'M') {
    nameElement.className = ('blue');
} else if (userGender == 'F') {
    nameElement.className = ('pink');
} else {
    nameElement.className = ('red');
}