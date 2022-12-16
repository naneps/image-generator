
import {
    createApp
} from 'vue'
import './style.css'
import {
    library
} from '@fortawesome/fontawesome-svg-core'

import {
    fas
} from '@fortawesome/free-solid-svg-icons'

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
library.add(fas)
import App from './App.vue'
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

// analytic.logEvent("notification_received")