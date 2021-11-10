const app = new Vue({
    el: '#app',

    data: {

    },

    mounted() {
        //axios

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/name')
            .then(response => {
                console.log(response.data.response);
                this.reponseData = response.data
                this.userName = response.data.response
            },



    }


})




//Istanziate una nuova richiesta
const xhttp = new XMLHttpRequest();

console.log(xhttp);
console.log(xhttp.readyState);

//Gestire la richiesta
xhttp.onreadystatechange = function () {
    console.log(this);
    if (this.readyState === 4 && this.status === 200) {

        const data = JSON.parse(this.responseText);
        console.log(data.response);
    }
}


//Aprire la comunicazione con il server
xhttp.open('GET', 'https://flynn.boolean.careers/exercises/api/random/name', true)

//Inviare la richiesta
xhttp.send();