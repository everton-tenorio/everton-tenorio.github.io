<template>
    <div class="news">
      <div class="seila">
        <h2>News<span> gmn</span></h2>
        <p style="font-size: 12px; margin-top:-20px; color:gray">Resumo de notícias utilizando Inteligência Artifical</p>
  
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
            <h4>2004 was the first year of the future</h4>
            <i id="external-link" class="fa fa-external-link"></i>
          </div>
          

          <div class="card-news">
            <a href="https://sofutebol.live" style="color:black">
                <img class="img-news" src="../assets/sofutebol.png" alt="News image">
                <h4>Futebol: a programação completa dos jogos de hoje | sofutebol.live</h4>
                <i id="external-link" class="fa fa-external-link"></i>
            </a>
          </div>
        </div>

        <div class="card-news" @click="openModal('infomoney')">
            <img class="img-news" src="https://www.infomoney.com.br/wp-content/uploads/2021/11/economia_1609210416_0.jpg?quality=70" alt="News image">
            <h4>Guia sobre o Drex: o que é e como funciona o Real Digital</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>

        <div class="card-news" @click="openModal('arstech')">
            <img class="img-news" src="https://cdn.arstechnica.net/wp-content/uploads/2024/10/abstract_cubes.jpg" alt="News image">
            <h4>Cheap AI “video scraping” can now extract data from any screen recording</h4>
            <i id="external-link" class="fa fa-external-link"></i>
        </div>
  
        <transition name="fade">
          <div v-if="selectedNews === 'verge'" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
              <button @click="closeModal" class="close-button">&times;</button>
              <h3 class="modal-title">{{ selectedNews.title }}2004 was the first year of the future</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> Resumo gerado por I.A</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    Em 2004, o mundo digital que conhecemos hoje nasceu. Grandes inovações como Facebook, Gmail, Firefox e Flickr foram lançadas, e o Google abriu seu capital, consolidando seu domínio. A Web 2.0 começou a reformular a internet, com termos como "blog" e "cauda longa" ganhando destaque. Enquanto sequências de filmes dominavam os cinemas e a Apple apresentava novos dispositivos, 2004 se tornou um ano decisivo para a tecnologia, moldando a forma como nos conectamos e interagimos online hoje.
                </p>
                <p style="font-size: 10px">
                  Ler notícia completa: 
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
              <h3 class="modal-title">{{ selectedNews.title }}Guia sobre o Drex: o que é e como funciona o Real Digital</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> Resumo gerado por I.A</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    O Drex é a moeda digital oficial do Brasil, lançada pelo Banco Central (BC), com o objetivo de modernizar as transações financeiras e aumentar a inclusão no mercado financeiro. Ela será uma extensão do real físico, permitindo transferências e pagamentos de maneira digital. Entre as principais vantagens, estão a redução de custos, maior segurança jurídica e privacidade, e a possibilidade de realizar transações 24/7. O Drex também permitirá o uso de contratos inteligentes, promovendo inovação no mercado financeiro e criando novas oportunidades de investimento e crédito.
                </p>
                <p style="font-size: 10px">
                  Ler notícia completa: 
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
              <h3 class="modal-title">{{ selectedNews.title }}Guia sobre o Drex: o que é e como funciona o Real Digital</h3>
              <div class="modal-content">
                <span id="badge-ia"><i class="fa-solid fa-microchip"></i> Resumo gerado por I.A</span>
                <p style="font-size: 14px">{{ selectedNews.summary }} 
                    Recentemente, o pesquisador de IA Simon Willison precisava somar os valores de cobranças de um serviço em nuvem, mas as informações estavam espalhadas em vários e-mails. Para evitar o trabalho manual, ele usou uma técnica chamada "video scraping", que consiste em alimentar uma gravação de tela em um modelo de IA para extração de dados. Ele utilizou o Google AI Studio, com o modelo Gemini 1.5 Flash, para extrair dados de um vídeo de 35 segundos. A IA converteu os dados em JSON, incluindo datas e valores monetários, e Willison os formatou em uma tabela CSV. O processo custou menos de um décimo de centavo, uma surpresa para Willison, que percebeu o potencial de modelos multimodais (áudio, vídeo, imagem e texto) para interagir com dados visuais. Ele vê o "video scraping" como uma forma de contornar barreiras de extração de dados em certos formatos e acredita que essa técnica terá um uso crescente, destacando tanto os benefícios quanto as possíveis preocupações com privacidade.                </p>
                <p style="font-size: 10px">
                  Ler notícia completa: 
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
  
  .seila {
      padding: 5px 30px;
  }
  
  .seila h2 {
      font-size: 40px;
      font-family: 'Times New Roman', Times, serif;
      color: white;
  }
  
  .seila span {
      font-family: 'Segoe UI', Ubuntu, 'Open Sans', sans-serif;
      font-size: 25px;
      font-style: italic;
      color: #c1c1c1;
      margin-left: -5px;
  }
  
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