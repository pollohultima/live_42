/* Chiediamo all'utente la sua età */

const user_age = prompt('Quanti anni hai');
const current_year = 2021;
const y_o_b = current_year - user_age;

/* Comunichiamo l'anno di nascita */
document.getElementById('anno').innerHTML = y_o_b;