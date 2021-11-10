//Deve apprarire un alert con un numero random

//element.addEventListener(event, function, useCapture);

//alert

//MathRandom()

const botonMy = document.getElementById('myBtn');
botonMy.addEventListener('click', function () {
    alert(Math.random());
})