const app = Vue.createApp({
    data: function() {
        return {
            textInput: ''
            // mystring: 'asdf',
            // myLink: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn',
            // linkString: 'Vue',
            // myBool: true,
            // myArray: [ {a: 1}, {a: 2}, {a: 3} ]
        }
    },
    methods: {
        changeInput: function() {
            this.textInput = 'new Input';
        },
    }
});

app.mount('#vue-app');