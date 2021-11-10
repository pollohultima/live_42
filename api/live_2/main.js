const app = new Vue({

    el: '#root',

    data: {

    },

    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(resp => {
                console.log(resp);
                this.UserNumber = resp.data.response
            })

            .catch


    },





})