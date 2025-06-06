import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import VueAxios from "vue-axios"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "vue3-carousel/dist/carousel.css"


const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount("#app")
