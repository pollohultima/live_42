const app = new Vue({

    el: '#root',

    data: {
        number: "",
    },

    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(response => {
                console.log(response);
                this.number = (response.data.response)
            })
    }

})