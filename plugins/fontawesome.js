import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faDev, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faGithub, faDev, faLinkedin, faLocationDot)
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
