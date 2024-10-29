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
          { message_id: "#tecnologia", text: "Utilizo técnicas de ciência de dados, desenvolvimento web, cloud e automação em projetos pessoais e profissionais. <br><button class='email-btn' style='color:white;border-radius:50px;'><a href='https://t.me/evertontenorio' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:27px'></i></a></button><a href='mailto:evttenorio@outlook.com?subject=Tecnologia'><button class='email-btn' style='border-radius:50px'><i class='fa fa-envelope' style='font-size:25px;'></i></button></a>" },
          { message_id: "#futebol", text: "Saiba onde assistir futebol ao vivo na TV e online. <br><br><br><a href='https://sofutebol.live/'><span style='float:right;border:1px solid black;padding: 5px;border-radius:5px;background:black; color:white' id='img-sft'>sofutebol<i style='color:red;font-size:20px;'>.</i>live</span><br></a>" },
          { message_id: "#economia", text: "Consulte o preço médio dos veículos e a variação por ano com base na FIPE. <br><br><br><a href='https://preco-fipe.vercel.app'><span style='border:1px solid black;padding: 8px;border-radius:5px;background:black; color:white'>🏎️  https://preco-fipe.vercel.app/</span><br><br></a>" },
          { message_id: "", text: "O site <i>dev.to</i> é uma rede social para programadores, lá vejo técnicas de programação e hacking, sempre que possível compartilho algo de tecnologia também." },
        ],
      };
    },
    methods: {
        enviarEmail() {
            window.location = 'mailto:evttenorio@outlook.com?subject=Tecnologia', true;
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