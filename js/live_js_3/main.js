//Chiediamo all'utente due parole in succesione, verfichiamo quale delle due parole è più lunga
let firstWord = prompt("Scrivi una parola");
let secondWord = prompt("Scrivi una seconda parola");
console.log(firstWord, secondWord);


//Stampiamo in console un messaggio appropriato

if (firstWord.length > secondWord.length) {
    console.log(firstWord + " è più lunga di " + secondWord);
    console.log(firstWord + " è composta da " + firstWord.length + " caratteri");
    console.log(secondWord + " è composta da " + secondWord.length + " caratteri");
}
else if (firstWord.length < secondWord.length) {
    console.log(secondWord + " è più lunga di " + firstWord);
    console.log(firstWord + " è composta da " + firstWord.length + " caratteri");
    console.log(secondWord + " è composta da " + secondWord.length + " caratteri");
} else {
    console.log(secondWord + " ha la stessa lunghezza di " + firstWord);
    console.log(firstWord + " è composta da " + firstWord.length + " caratteri");
    console.log(secondWord + " è composta da " + secondWord.length + " caratteri");
}