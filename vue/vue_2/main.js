const app = new Vue({
    el: "#root",
    data: {
        className: 'red'
    },

    methods: {
        change() {
            if (this.className == 'red') {
                this.className = 'blue'
            } else {
                this.className = 'red'
            }
        }
    }
})