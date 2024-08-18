<template>
  <div id="app">
    <div class="profile">
      <img src="https://avatars.githubusercontent.com/u/114461163?v=4" alt="Foto de Perfil" class="profile-img">
      <h1>Everton</h1>
      <p>Bem-vindo ao meu perfil! Confira meus links abaixo.</p>
    </div>
    <div class="links">
      <button @click="openModal('GitHub')" class="link-btn"><i class="fa-brands fa-github"></i> GitHub</button>
      <button @click="openModal('Portfólio')" class="link-btn"><i class="fa-solid fa-briefcase"></i> Portfólio</button>
      <button @click="openModal('dev.to')" class="link-btn"><i class="fa-brands fa-dev"></i> dev.to</button>
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
            </p>
            <p v-if="selectedLink === 'dev.to'">
              Leia meus artigos técnicos no dev.to, onde compartilho insights sobre programação e tecnologia.
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLink: null
    }
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
.profile-img {
  border-radius: 50%;
  width: 150px;
  border: 3px solid red;
}
.links {
  display: flex;
  justify-content: space-around;
}

/* Estilos dos Botões */
.link-btn {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}
.link-btn i {
  margin-right: 10px;
}
.link-btn:hover {
  background-color: red;
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

