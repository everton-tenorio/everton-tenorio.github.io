<template>
  <div id="app">
    <div class="profile">
      <img src="https://avatars.githubusercontent.com/u/114461163?v=4" alt="Foto de Perfil" class="profile-img">
      <h1>Everton Tenório</h1>
      <p class="contact">
        <a href="https://t.me/evertontenorio" target="_blank" class="telegram-icon">
          <i class="fab fa-telegram-plane" style="color: white"></i>
        </a>
      </p>
    </div>
    <div class="links">
      <a href="https://github.com/everton-tenorio"><button class="link-btn"><i class="fa-brands fa-github"></i> GitHub</button></a>
      <button @click="openModal('Portfólio')" class="link-btn"><i class="fa-solid fa-briefcase"></i> Portfólio</button>
      <a href="https://dev.to/evertontenorio"><button class="link-btn"><i class="fa-brands fa-dev"></i> dev.to</button></a>
    </div>

    <transition name="fade">
      <div v-if="selectedLink" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <button @click="closeModal" class="close-button">&times;</button>
          <h2 class="modal-title">{{ selectedLink }}</h2>
          <div class="modal-content">
            <p v-if="selectedLink === 'GitHub'">
              Github
            </p>
            <div v-if="selectedLink === 'Portfólio'">
              <div class="projects">
                <a href="https://sofutebol.live/"><p id="img-sft">sofutebol<i class="fa-solid fa-bullseye"></i>live</p></a>
                <a href="https://preco-fipe.vercel.app"><p><img src="./car.png" width="40px"/>preço-FIPE</p></a>
                <a href="https://github.com/everton-tenorio/cty">
                  <img src="./cty.png" width="40px"/>
                  <p style="margin-top: -5px;"> 
                    cty
                    <br><sub style="color:gray; font-size:10px">Conventional Commits CLI</sub>
                  </p>
                </a>             
              </div>
            </div>
            <p v-if="selectedLink === 'dev.to'">
              Leia meus artigos técnicos no dev.to, onde compartilho insights sobre programação e tecnologia.
            </p>
          </div>
        </div>
      </div>
    </transition>

   <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'


export default {
  data() {
    return {
      selectedLink: null
    }
  },
  components: {
    FooterComponent,
  },
  methods: {
    openModal(link) {
      this.selectedLink = link;
    },
    closeModal() {
      this.selectedLink = null;
    }
  }
}
</script>

<style>
#app {
  margin-top: 30px;
  padding: 10px;
  min-height: 85vh;
}

/* Perfil e Links em Layout Desktop */
.profile {
  text-align: center;
  margin-bottom: 20px;
}

.profile h1 {
  font-family: 'Ubuntu', sans-serif;
  margin-top: 5px;
  font-size: 25px;
  color: white;
}

.profile p {
  font-family: 'Ubuntu', sans-serif;
  font-style: italic;
  color: #931010;
}

.profile-img {
  border-radius: 50%;
  width: 150px;
  border: 3px solid black;
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
  padding: 10px;
}

.links button {
  padding: 25px;
  margin-bottom: 30px;
}

/* Estilos dos Botões */
.link-btn {
  background-color: #1f1e1e;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  box-shadow: 1px 1.5px 1px #880505;
}
.link-btn i {
  margin-right: 10px;
}
.link-btn:hover {
  color: black;
  background-color: white;
  box-shadow: 3px 5px 1px red;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
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
  color: black;
}

.modal-content {
  color: black;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 4rem;
  color: white;
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
  color: black;
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

/* Responsividade para dispositivos móveis */
@media screen and (max-width: 767px) {
  #app {
    margin-top: 15px;
  }

  .profile-img {
    width: 110px;
  }

  .contact {
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .links {
    display: block;
    text-align: center;
    padding: 25px;
  }

  .links button {
    padding: 20px;
    margin-bottom: 35px;
  }

  .link-btn {
    margin-bottom: 10px;
    width: 100%;
    font-size: 1rem;
    padding: 10px;
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

</style>
