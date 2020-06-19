import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

import { faCheckCircle,faSearch,faMapMarkerAlt,faChevronLeft,faPrint,faEnvelope,faAngleRight,faAngleLeft  } from '@fortawesome/free-solid-svg-icons'

library.add(fas,faCheckCircle,faSearch,faMapMarkerAlt,faChevronLeft,faPrint,faEnvelope,faAngleRight,faAngleLeft)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)