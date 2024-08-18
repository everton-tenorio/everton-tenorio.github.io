<template>
  <div id="app">
    <div class="profile">
      <img src="https://avatars.githubusercontent.com/u/114461163?v=4" alt="Foto de Perfil" class="profile-img">
      <h1>Everton Tenório</h1>
      <p>@everton.py</p>
    </div>
    <div class="links">
      <a href="https://github.com/everton-tenorio"><button class="link-btn"><i class="fa-brands fa-github"></i> GitHub</button></a>
      <button @click="openModal('Portfólio')" class="link-btn"><i class="fa-solid fa-briefcase"></i> Portfólio</button>
      <a href="https://dev.to/evertontenorio"><button class="link-btn"><i class="fa-brands fa-dev"></i> dev.to</button></a>
    </div>

    <transition name="fade">
      <div v-if="selectedLink" class="modal-overlay">
        <div class="modal">
          <button @click="closeModal" class="close-button">&times;</button>
          <h2 class="modal-title">{{ selectedLink }}</h2>
          <div class="modal-content">
            <p v-if="selectedLink === 'GitHub'">
              Explore meus repositórios no GitHub, onde compartilho projetos de código aberto e colaborações.
            </p>
            <p v-if="selectedLink === 'Portfólio'">
              Veja meu portfólio com projetos que destacam minhas habilidades e experiências em desenvolvimento.
              <a href="https://sofutebol.live/"><p><img src="./sofutebol-live.png" width="50%"/></p></a>
            </p>
            <p v-if="selectedLink === 'dev.to'">
              Leia meus artigos técnicos no dev.to, onde compartilho insights sobre programação e tecnologia.
            </p>
          </div>
        </div>
      </div>
    </transition>

   <!--<FooterComponent />-->
  </div>
</template>

<script>
// import FooterComponent from './components/FooterComponent.vue'


export default {
  data() {
    return {
      selectedLink: null
    }
  },
  components: {
    // FooterComponent,
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

a {
  text-decoration: none;
}

.links {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.links button {
  padding: 15px;
  margin-bottom: 20px;
}

/* Estilos dos Botões */
.link-btn {
  background-color: #111;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  box-shadow: 3px 5px 1px red;
}
.link-btn i {
  margin-right: 10px;
}
.link-btn:hover {
  color: red;
  background-color: white;
  box-shadow: 3px 5px 1px black;
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

/* Responsividade para dispositivos móveis */
@media screen and (max-width: 767px) {
  .profile-img {
    width: 120px;
  }

  .links {
    display: block;
    text-align: center;
    padding: 30px;
  }

  .links button {
    padding: 18px;
    margin-bottom: 25px;
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
}

</style>

