// JS
import './js/'

// SASS
import './assets/sass/main.sass'


// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default);

// Vue init
const app = new Vue({
  el: '#app',
  data: {
    showForm: true,
    formData: {
      email: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    formGuestsCounter: 0,
    formGuests: []
  },

  computed: {
    fullName() {
      return this.formData.firstName + this.formData.lastName;
    } 
  },

  methods: {
    onAddGuest() {
      this.formGuestsCounter++;
    },

    onCreateTable(e) {
      e.preventDefault();
      this.showForm = false;
    },

    onDeleteGuest(e) {
      e.target.closest('.form-group').remove();
    }
  }
});