// Third Part Components
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import jQuery from 'jquery'

// Function
import globalFunction from './services/globalFunction'

// Style Third Part
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// Style Local
import "./assets/style/index.css"


axios.defaults.baseURL = 'https://dummyjson.com'

window.jQuery = window.$ = jQuery
const app = createApp(App)
app.mixin(globalFunction)

app.use(store).use(router).mount('#app')
