<template>
    <div class="slider-container">
      <carousel :items-to-show="1.5" :pagination="false" :navigation="true">
        <slide 
          v-for="message in messages" 
          :key="message.message_id" 
          class="card"
        >
          <div class="card-content">
            <div class="clonett">
                <img src="https://avatars.githubusercontent.com/u/114461163?v=4" alt="Foto de Perfil" class="evtt">
                <h3>@everton.py</h3>
                
            </div>
            <p style="margin-top:-10px; margin-left: 40px">{{ message.message_id }}</p>
            <p v-html="message.text"></p>
          </div>
        </slide>
        
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  
  export default {
    name: 'MessageSlider',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        messages: [
          { message_id: "#tech", text: "." },
          { message_id: "#goal", text: "." },
          { message_id: "", text: "." },
          { message_id: "", text: "." },
        ],
      };
    },
    watch: {
      // Observe mudanças no idioma
      '$i18n.locale': function() {
        this.updateMessages();
      }
    },
    mounted() {
      this.updateMessages();
    },
    methods: {
        enviarEmail() {
            window.location = 'mailto:evttenorio@outlook.com?subject=Tecnologia', true;
        },
        updateMessages() {
            // Atualiza as traduções das mensagens
            this.messages[0].text = this.$t('aboutme');
            this.messages[1].text = this.$t('sofutebas');
            this.messages[2].text = this.$t('precofipe');
            this.messages[3].text = this.$t('devto');

        }
    }
  };
  </script>
  
<style scoped>
.slider-container {
  margin-left: -20px;
  margin-right: -20px;
}

/* Estilo para o carrossel */
.card {
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 50px;
    transition: transform 0.3s;
    cursor: pointer;
    min-height: 200px;
    max-height: 300px;
    min-width: 100px; /* Largura mínima para cards */
    max-width: 350px; /* Largura máxima para cards */
    margin: 0 15px; /* Margem para espaçamento lateral */
}

/* Efeito de zoom ao passar o mouse */
.card:hover {
    transform: scale(1.05);
}

.card-content {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0;
    /*justify-content: center;
    align-items: center;*/
}

.clonett {
    margin-top: 10px;
    display: flex;
}

.card-content .evtt {
    margin-right: 10px; /* Espaço entre a imagem e o título */
    border-radius: 50%;
    border: 1px solid black;
    width: 30px;
}

.clonett h3 {
    margin: 0;
    font-size: 1.2rem;
}

.card-content p {
  font-size: 0.9rem;
  color: #555;
}

/* Estilização para dispositivos móveis */
@media (max-width: 600px) {
  .card {
    min-width: 250px;
    padding: 20px;
    margin: 0 15px; /* Menor margem em dispositivos móveis */
  }

  .card-content h3 {
    font-size: 1rem;
  }

  .card-content p {
    font-size: 0.8rem;
  }
}
</style>