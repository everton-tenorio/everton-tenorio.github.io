import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faDev, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot , faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faGithub, faDev, faLinkedin, faTelegram, faLocationDot, faChevronLeft, faChevronRight)
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
