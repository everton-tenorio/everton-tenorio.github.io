<template>
    <div class="news">
      <div class="cards-container">
        <h2>News<span> gmn</span></h2>
        <p style="font-size: 12px; margin-top:-20px; color:gray">{{ $t('newssummary') }}</p>
  
        <div class="all-cards">
          <div
            v-for="newsItem in news"
            :key="newsItem.id"
            @click="openModal(newsItem)"
            class="card-news"
          >
            <img class="img-news" :src="newsItem.image" alt="News image">
            <h4>{{ newsItem.title }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
          </div>

          <div class="card-news" @click="openModal('post1')">
            <img class="img-news" :src="$t('mastodon_img.post1', '')" alt="News image">
            <h4>{{ $t('mastodon_title.post1') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
          </div>
          

          <!--<div class="card-news">
            <a href="https://sofutebol.live" style="color:white">
                <img class="img-news" src="../assets/sofutebol.png" alt="News image">
                <h4>{{ $t('sofutebol') }}</h4>
                <i id="external-link" class="fa fa-external-link"></i>
            </a>
          </div>-->
        </div>

        <div class="card-news" @click="openModal('post2')">
            <img class="img-news" :src="$t('mastodon_img.post2', '')" alt="News image">
            <h4>{{ $t('mastodon_title.post2') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>

        <div class="card-news" @click="openModal('post3')">
            <img class="img-news" :src="$t('mastodon_img.post3', '')" alt="News image">
            <h4>{{ $t('mastodon_title.post3') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>

        <div class="card-news" @click="openModal('post4')">
            <img class="img-news" :src="$t('mastodon_img.post4', '')" alt="News image">
            <h4>{{ $t('mastodon_title.post4') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>
  
        <transition name="fade">
          <div v-if="selectedNews === 'post1'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <div class="modal-header"
              :style="{ backgroundImage: 'url(' + $t('mastodon_img.post1', '') + ')'}">
                <h3 id="modal-title">{{ selectedNews.title }}{{ $t('mastodon_title.post1') }}</h3>
              </div>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> {{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('mastodon_toot.post1', '') }}
                </p>
              </div>
            </div>
          </div>
        </transition>

        <transition>
          <div v-if="selectedNews === 'post2'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <div class="modal-header"
              :style="{ backgroundImage: 'url(' + $t('mastodon_img.post2', '') + ')'}">
                <h3 id="modal-title">{{ selectedNews.title }}{{ $t('mastodon_title.post2') }}</h3>
              </div>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> {{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('mastodon_toot.post2') }}
                </p>
              </div>
            </div>
          </div>
        </transition>

        <transition>
          <div v-if="selectedNews === 'post3'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <div class="modal-header"
              :style="{ backgroundImage: 'url(' + $t('mastodon_img.post3', '') + ')'}">
                <h3 id="modal-title">{{ selectedNews.title }}{{ $t('mastodon_title.post3') }}</h3>
              </div>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> {{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('mastodon_toot.post3') }}
                </p> 
              </div>
            </div>
          </div>
        </transition>

        <transition>
          <div v-if="selectedNews === 'post4'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <div class="modal-header"
              :style="{ backgroundImage: 'url(' + $t('mastodon_img.post4', '') + ')'}">
                <h3 id="modal-title">{{ selectedNews.title }}{{ $t('mastodon_title.post4') }}</h3>
              </div>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> {{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('mastodon_toot.post4') }}
                </p> 
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        news: [],
        selectedNews: null
      }
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
          console.log('sofutebol.live')
        }
      },
      openModal(item) {
        this.selectedNews = item;
      },
      closeModal() {
        this.selectedNews = null;
      }
    },
    mounted() {
      this.fetchNews();
    }
  }
  </script>
  
<style>
.news {
  margin-top: 20px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 10px;
  border-radius: 35px;
  background: #232323;
  }
  
.cards-container {
  padding: 5px 30px;
}
  
.cards-container h2 {
  font-size: 40px;
  font-family: 'Times New Roman', Times, serif;
  color: white;
}
  
.cards-container span {
  font-family: 'Segoe UI', Ubuntu, 'Open Sans', sans-serif;
  font-size: 25px;
  font-style: italic;
  color: #c1c1c1;
  margin-left: -5px;
}

.all-cards {margin-top: 50px;}
  
.img-news {
  border-radius: 100%;
  width: 15%;
  height: 60%;
  margin-top: -30px;
  display: flex;
  border: 1px solid black;
  float: right
}
  
  /* Estilos dos cards */
.card-news {
  background-color: black;
  color: white;
  border: none;
  margin-top: 30px;
  margin-bottom: 45px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px 10px 2px 10px;
  width: auto;
  height: 65px;
  align-items: center;
  box-shadow: 0px 2px 1px #d81515;
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
  background-color: rgba(0, 0, 0, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
}
  
.modal {
  font-family: 'Times New Roman', Times, serif; 
  margin: 20px;
  padding: 20px;
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 50%;
  max-height: 80%;
  overflow-y: auto;
  text-align: left;
}

.modal-header {
  position: relative;
  background-size: cover; /* Faz a imagem cobrir toda a área */
  background-position: center; /* Centraliza a imagem */
  padding: 0px 0px 10px 0px; /* Espaçamento interno */
  box-shadow: inset 100px 100px 100px 100px #000000b5;  /* Sombra escura para leitura */
  height: auto; /* Ajusta a altura ao conteúdo (ou você pode definir fixa, ex.: 200px) */ 
  object-fit: cover;
  margin-top: -20px;
  margin-right: -20px;
  margin-left: -20px;
  margin-bottom: 15px;
} 
  
#modal-title {
  font-size: 1.8rem;
  color: white;
  margin: 0;
  text-align: left;
  padding: 20px 0px 5px 15px;
  z-index: 2;
}

.modal-content p{
  margin-top: 30px;
  font-size: 14px;
  line-height: 1.6;
  border-top: 0.5px solid #ffffff34;
  outline-offset: 10px;  
  color: white; 
  padding: 15px 5px 15px 5px;
  text-align: left;
}

#external-link {
  margin: 0px;
  float: right;
  font-size: 10px;
  color: #ebebec09;
}

#badge-ia {
  margin-bottom: 100px;
  background: #1b1b1b;
  color: white;
  border-radius: 10px;
  font-size: 11px;
  border: 0.5px solid red;
  padding: 5px;
}
</style>
