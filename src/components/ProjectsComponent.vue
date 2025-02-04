<template>
    <div class="banner-projects">
        <div class="banner-header">
        <!--style="background-image: url('https://github.com/everton-tenorio/cty/raw/main/cty-logo.png'-->
            <span id="badge"><i class="fa-brands fa-github"></i> github</span>
            <div id="particles-container"></div>
            <h3 id="banner-title">Conventional Commits + Python + CLI = cty</h3>
        </div>
        <!--<div class="modal-content">
            <span id="badge-ia"><i class="fa-solid fa-microchip"></i> badge</span>
            <p style="font-size: 14px">
                    post
            </p>
        </div>-->
    </div>
</template>

<script>
import { particlesJS } from "particles.js";
particlesJS

export default {
    data() {
      return {}
    },
    mounted() {
        this.loadParticles();
    },
    methods: {
      async fetchNews() {
        try {
            console.log('dev.evttenorio.com')
          /*fetch('')
          .then(response => {
                return response.json();
            })
            .then(data => {
                this.news = data.articles
            })*/
            .catch(error => console.error('Erro:', error));     
        } catch (error) {
          //console.error('Erro ao buscar notícias:', error);
        }
      },
      loadParticles() {
        window.particlesJS("particles-container", {
            particles: {
            number: { value: 120, density: { enable: true, value_area: 500 } },
            color: { value: "#ffffff" },
            shape: {
                type: "triangle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
            },
            opacity: {
                value: 0.6,
                anim: { enable: false },
            },
            size: {
                value: 1,
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: "#ff0000",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
            },
            },
            interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
            },
            },
            retina_detect: true,
            });
        },
    },
}
</script>
  
<style>
.banner-projects {
  font-family: "M PLUS Code Latin", serif;
  font-weight: 100;
  margin: 0;
  width: 100%;
}

.banner-header {
  position: relative;
  background-size: cover; /* Faz a imagem cobrir toda a área */
  background-position: center; /* Centraliza a imagem */
  padding: 0px 0px 10px 0px; /* Espaçamento interno */
  box-shadow: inset 100px 100px 100px 100px #00000079;  /* Sombra escura para leitura */
  height: 100px; /* Ajusta a altura ao conteúdo (ou você pode definir fixa, ex.: 200px) */ 
  object-fit: cover;
  margin-top: -10px;
  margin-right: -20px;
  margin-left: -20px;
  margin-bottom: 10px;
} 

#badge {
  color: #fdf8f893;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px;
  font-family: 'Ubuntu';
  margin-left: 5px;
}

#banner-title {
  font-size: 1.5rem;
  color: #ffffffea;
  margin: 0;
  text-align: left;
  padding: 20px 0px 5px 15px;
  z-index: 2;
}

#particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
}
</style>
