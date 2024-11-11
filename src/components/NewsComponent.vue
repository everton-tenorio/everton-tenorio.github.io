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

          <div class="card-news" @click="openModal('verge')">
            <img class="img-news" src="https://cdn.vox-cdn.com/thumbor/r0zpb7jtV22KFWAHGD1q68jSqWk=/95x194:1946x1166/fit-in/1851x972/cdn.vox-cdn.com/uploads/chorus_asset/file/25681754/2004_CHORUS_LEDE2.jpg" alt="News image">
            <h4>{{ $t('verge') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
          </div>
          

          <div class="card-news">
            <a href="https://sofutebol.live" style="color:black">
                <img class="img-news" src="../assets/sofutebol.png" alt="News image">
                <h4>{{ $t('sofutebol') }}</h4>
                <i id="external-link" class="fa fa-external-link"></i>
            </a>
          </div>
        </div>

        <div class="card-news" @click="openModal('infomoney')">
            <img class="img-news" src="https://www.infomoney.com.br/wp-content/uploads/2021/11/economia_1609210416_0.jpg?quality=70" alt="News image">
            <h4>{{ $t('drex') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>

        <div class="card-news" @click="openModal('arstech')">
            <img class="img-news" src="https://cdn.arstechnica.net/wp-content/uploads/2024/10/abstract_cubes.jpg" alt="News image">
            <h4>{{ $t('arstech') }}</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>
  
        <transition name="fade">
          <div v-if="selectedNews === 'verge'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <h3 class="modal-title">{{ selectedNews.title }}{{ $t('verge') }}</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> {{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('vergenews') }}
                </p>
                <p style="font-size: 10px">
                  {{ $t('leia') }}: 
                  <!--<a :href="selectedNews.urlNews" target="_blank">{{ selectedNews.urlNews }}</a>-->
                  <a href="https://www.theverge.com/c/24247055/2004-tech-internet-gadgets-phones-pop-culture">https://www.theverge.com/c/24247055/2004-tech-internet-gadgets-phones-pop-culture</a>
                </p>
              </div>
            </div>
          </div>
        </transition>

        <transition>
          <div v-if="selectedNews === 'infomoney'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <h3 class="modal-title">{{ selectedNews.title }}{{ $t('drex') }}</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> {{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('drexnews') }}
                </p>
                <p style="font-size: 10px">
                  {{ $t('leia') }}: 
                  <!--<a :href="selectedNews.urlNews" target="_blank">{{ selectedNews.urlNews }}</a>-->
                  <a href="https://www.infomoney.com.br/guias/drex-real-digital/">
                    https://www.infomoney.com.br/guias/drex-real-digital/</a>
                </p>
              </div>
            </div>
          </div>
        </transition>

        <transition>
          <div v-if="selectedNews === 'arstech'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <h3 class="modal-title">{{ selectedNews.title }} {{ $t('arstech') }}</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> {{ $t('badgeia') }}</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    {{ $t('arstechnews') }}                </p>
                <p style="font-size: 10px">
                  {{ $t('leia') }}: 
                  <!--<a :href="selectedNews.urlNews" target="_blank">{{ selectedNews.urlNews }}</a>-->
                  <a href="https://arstechnica.com/ai/2024/10/cheap-ai-video-scraping-can-now-extract-data-from-any-screen-recording/">
                    https://arstechnica.com/ai/2024/10/cheap-ai-video-scraping-can-now-extract-data-from-any-screen-recording/</a>
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
            console.log('sofutebol.live')
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
      margin-top: 40px;
      margin-left: -20px;
      margin-right: -20px;
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
      width: 50px;
      height: 50%;
      margin-top: -30px;
      display: flex;
      border: 1px solid black;
      float: right
  }
  
  /* Estilos dos cards */
  .card-news {
    background-color: white;
    color: black;
    border: none;
    margin-top: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.1rem;
    padding: 10px;
    width: auto;
    height: 100px;
    align-items: center;
    box-shadow: 2px 2px 1px #d81515;
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
  }
  
  .modal-content {
    color: black;
  }

#external-link {
    margin-top: -25px;
    float: right;
    font-size: 10px;
    color: #2f2f2f;
}

#badge-ia {
    background: black;
    color: white;
    border-radius: 10px;
    font-size: 11px;
    padding: 5px;
}
</style>
