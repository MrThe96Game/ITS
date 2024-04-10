const app = Vue.createApp({
    data: function() {
        return {
            textInput: '',
            myClass: 'red',
            counter: 0
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
        changeClass: function() {
            console.log(this.myClass)
            this.myClass = this.myClass == 'red' ? 'blue' : 'red';
        },
        sumValue: function(event, value) {
            console.log(event)
            this.counter += value;
        }
    }
});

app.mount('#vue-app');