<template>
  <div id="app">
    <div class="profile">
      <div class="profile-img">
        <img src="https://avatars.githubusercontent.com/u/114461163?v=4" alt="Foto de Perfil" class="evt-img">
      </div>
      <h1>Everton Tenório</h1>

      <p class="contact">
        <!-- Botão de escolha de idioma -->
        <label class="language-switcher">
          <input type="checkbox" v-model="isEnglish" @change="toggleLanguage">
          <span class="slider round"></span>
          <span class="select-ptbr"><img src="https://cdn-icons-png.flaticon.com/512/555/555417.png" width="20px" height="20px"/></span>
          <span class="select-en"><img src="https://cdn-icons-png.flaticon.com/128/630/630591.png" width="21px" height="21px"/></span>
        </label>

        <!--<a href="https://t.me/evertontenorio" target="_blank" class="telegram-icon">
          <i class="fab fa-telegram-plane" style="color: white"></i>
        </a>-->
      </p>
    </div>
    <div class="links">
      <a href="https://github.com/everton-tenorio"><button class="link-btn"><i id="iconw" class="fa-brands fa-github"></i></button></a>
      <a href="https://t.me/evertontenorio"><button class="link-btn"><i id="iconw" class="fab fa-telegram-plane"></i></button></a>
      <button @click="openModal(' ')" class="link-btn"><i id="iconw" class="fa-solid fa-briefcase"></i></button>
    </div>

    <transition name="fade">
      <div v-if="selectedLink" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <button @click="closeModal" class="close-button">&times;</button>
          <h2 class="modal-title">{{ selectedLink }}</h2>
          <div class="modal-content">
            <!--<p v-if="selectedLink === 'GitHub'">
              Github
            </p>-->
            <div v-if="selectedLink === ' '">
              <div class="projects">
                <a href="https://sofutebol.live/"><p id="img-sft">sofutebol<i class="fa-solid fa-bullseye"></i>live</p></a>
                <a href="https://preco-fipe.vercel.app"><p><img style="border-radius: 55px; border: 2px solid #2089d4" src="./car.png" width="40px"/>preço-FIPE</p></a>            
              </div>
            </div>
            <!--<p v-if="selectedLink === 'dev.to'">
              Leia meus artigos técnicos no dev.to, onde compartilho insights sobre programação e tecnologia.
            </p>-->
          </div>
        </div>
      </div>
    </transition>
    <DevtoComponent />
    <NewsComponent />
    <!--<EvttsComponent />-->
    <!--<FooterComponent />-->
  </div>
</template>

<script>
import DevtoComponent from './components/DevtoComponent.vue'
import NewsComponent from './components/NewsComponent.vue'
// import EvttsComponent from './components/EvttsComponent.vue'
// import FooterComponent from './components/FooterComponent.vue'


export default {
  data() {
    return {
      selectedLink: null
    }
  },
  components: {
    DevtoComponent,
    NewsComponent,
    // EvttsComponent,
    // FooterComponent,
  },
  computed: {
    // Obter o idioma atual diretamente do i18n
    currentLanguage() {
      return this.$i18n.locale;
    }
  },
  methods: {
    openModal(link) {
      this.selectedLink = link;
    },
    closeModal() {
      this.selectedLink = null;
    },
    toggleLanguage() {
      const newLanguage = this.currentLanguage === 'en' ? 'pt' : 'en';
      this.$i18n.locale = newLanguage;
      localStorage.setItem('language', newLanguage);
    }
  }
}
</script>

<style>
#app {
  margin-top: 30px;
  padding: 5px 150px 5px 150px;
  min-height: 85vh;
}

/* Perfil e Links em Layout Desktop */
.profile {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 25px;
}

.profile h1 {
  font-family: 'Ubuntu', sans-serif;
  margin-top: 20px;
  font-size: 20px;
  color: white;
}

.profile p {
  font-family: 'Ubuntu', sans-serif;
  font-style: italic;
  color: #931010;
}

.profile-img {
  margin: 0 auto;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #2dbd2d;
  /* background: linear-gradient(4deg, red, yellow, #e6530e, #ed232a, #ed232a, #db0909, red); */
  border: 2px solid transparent;
  overflow: hidden; /* Esconde partes do pseudo-elemento que saem do círculo */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para dar um efeito de destaque */
}

.evt-img {
  border-radius: 50%;
  border: 5px solid black;
  width: 90px;
}

.contact {
  font-size: 40px;
  margin-bottom: 50px;
  margin-top: 20px;
}

a {
  text-decoration: none;
}

.links {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  margin-bottom: 50px;
  border: 0.8px dotted #e8dfdf2b;
  border-radius: 20px;
  border-width: 2px;
}

/* Estilos dos Botões */
.link-btn {
  background-color: #1f1e1e;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 10%;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  box-shadow: 1px 0.6px 0.6px 0.5px #ec0909dd;
}

.links button {
    padding: 10px;
    margin-bottom: 10px;
}

.link-btn:hover {
  color: black;
  background-color: white;
  box-shadow: 3px 5px 1px red;
}

#iconw {
  font-size: 25px;
}

/* Transição do Modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Estilos do Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background-color: #000000d7;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 80%;
  overflow-y: auto;
  text-align: left;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.modal-content {
  color: white;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  color: #c0c0c0;
}

.close-button:hover {
  color: #555;
}

.projects {
  text-align:center;
  margin: 10px 0px;
  padding: 25px 60px;
}

.projects a {
  color: white;
}

.fa-bullseye {
  color: red;
  font-size: 6px;
}

.projects p {
  font-size: 20px;
}

#img-sft img {
  width: 25%;
}

.email-btn {
  margin-top: 15px;
  margin-right:10px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  float: right;
  border: 1px solid black;
}

.email-btn:hover {
    background-color: white;
    color: black;
}

.email-btn a {
  color: white;
}

/* Remover o highlight que aparece ao clicar nos cards */
.card, .email-btn {
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.card:focus, .card:active, .email-btn:focus, .email-btn:active {
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent; 
}

a {
  -webkit-tap-highlight-color: transparent;
}

* {
  -webkit-tap-highlight-color: transparent;
}

/* Responsividade para dispositivos móveis */
@media screen and (max-width: 767px) {
  #app {
    padding: 10px;
    margin-top: 8px;
  }

  .contact {
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .links {
    display: flex;
    text-align: center;
    padding: 25px;
    margin-bottom: 45px;
  }

  .links button {
    padding: 15px;
  }

  .modal {
    max-width: 95%;
    max-height: 90%;
    padding: 15px;
  }

  .modal-title {
    font-size: 1.2rem;
  }

  .projects p {
    margin-top: 10px;
    margin-bottom: 35px;
  }

  #img-sft img{
    width: 20%;
  }
}


.language-switcher {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  transform: translateY(10%);
}

input {
  opacity: 0;
  width: 0;
  height: 0;
}

.select-ptbr, .select-en {
  position: absolute;
  font-size: 14px;
  top: 10px;
  color: #fff;
}

.select-ptbr {
  left: 10px;
}

.select-en {
  right: 10px;
}

/* Slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1f1e1e;
  transition: 0.4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 36px;
  width: 36px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider:before {
  transform: translateX(40px);
}
</style>
