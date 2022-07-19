const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Jano',
            lastName: 'Trix'
        }
    },
    methods: {
        fullName(){
            return `${this.firstName}, ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app');

// setTimeout(() => {
// vm.firstName = 'Bob'
// }, 2000);


// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Jane',
//             lastName: 'Trax'
//         }
//     }
// }).mount('#app2');