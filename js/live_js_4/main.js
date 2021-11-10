const userAgeOne = parseInt(prompt('Quanti anni hai ?'));

const userAgeTwo = parseInt(prompt('Quanti anni hai ?'));


if (userAgeOne > userAgeTwo) {
    console.log("UtenteOne è più grande");
}
else if (userAgeTwo > userAgeOne) {
    console.log("UtenteTwo è più grande");
}
else {
    console.log("Hanno la stessa età");
}