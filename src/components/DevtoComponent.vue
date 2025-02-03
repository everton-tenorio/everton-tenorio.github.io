<template>
    <div class="slider-container">
      <i class="fa-brands fa-dev devto"><p> #community</p></i>
      <carousel :items-to-show="1.5" :pagination="false" :navigation="true">
        <slide 
          v-for="post in posts" 
          :key="post.id" 
          class="card"
          @click="openLink(post.url)"
        >
          <div class="card-content">
            <img :src="post.social_image" alt="Imagem do Post" class="card-image" />
            <div class="card-info">
              <h3>{{ post.title }}</h3>
              <p>{{ post.readable_publish_date }}</p>
            </div>
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
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
  
  export default {
    name: "DevToSlider",
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        posts: [],
      };
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch("https://dev.to/api/articles?username=evertontenorio");
          const data = await response.json();
          this.posts = data.slice(0, 5); // Pegando as 5 publicações mais recentes
        } catch (error) {
          console.error("Erro [dev.to]:", error);
        }
      },
      openLink(url) {
        window.open(url, "_blank");
      },
    },
    mounted() {
      this.fetchPosts();
    },
  };
</script>
  
<style scoped>
  .devto {
    color: white;
    margin-left: 10px;
    font-size: 35px;
    display: flex;
  }

  .devto p {
    font-size: 18px;
    color: #ffffff2f;
    position: absolute;
    margin: 5.5px 40px;
    font-family: Ubuntu;
  }

  .slider-container {
    margin-top: 50px;
    margin-left: -20px;
    margin-right: -20px;
  }
  
  .card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    cursor: pointer;
    max-width: 300px;
    max-height: 200px;
    margin: 0 15px;
    overflow: hidden;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
  }
  
  .card-image {
    width: 100%;
    height: auto;
    max-height: 100px; /* Controla a altura da imagem */
    object-fit: cover;
  }
  
  .card-info {
    padding: 10px;
  }
  
  .card-info h3 {
    font-size: 1.1rem;
    margin: 5px 0;
  }
  
  .card-info p {
    font-size: 0.8rem;
    color: #555;
  }
  
  /* Estilo para dispositivos móveis */
  @media (max-width: 600px) {
    .card {
      max-width: 250px;
      margin: 0 10px;
    }
  
    .card-info h3 {
      font-size: 1rem;
    }
  
    .card-info p {
      font-size: 0.8rem;
    }
  }
</style>