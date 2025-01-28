import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'


const messages = {
  en: {
    newssummary: 'News summary using Artificial Intelligence',
    badgeia: 'AI-generated summary',
    mastodon_title: {},
    mastodon_toot: {},
    mastodon_img: {},
    sofutebol: 'Football/Soccer: the complete schedule of today’s games | sofutebol.live',    
  },
  pt: {
    newssummary: 'Resumo de notícias utilizando Inteligência Artifical',
    badgeia: 'Resumo gerado por I.A.',
    mastodon_title: {},
    mastodon_toot: {},
    mastodon_img: {},
    sofutebol: 'Futebol: a programação completa dos jogos de hoje | sofutebol.live',  
  }
}
 

async function fetchMastodonPosts(i18n) {
  try {
    const response = await fetch(
      'https://mastodon.social/api/v1/accounts/113900943422598269/statuses'
    );
    const posts = await response.json();

    // Regex para separar [EN] e [PT-BR]
    const tootRegex = /\[EN\](.*?)\[PT-BR\](.*)/s;
    // Regex para capturar títulos que começam e terminam com #
    const titleRegex = /#([^#]+)#/;

    const stripHtml = (html) => html.replace(/<[^>]*>/g, ''); // Remove tags HTML

    posts.forEach((post, index) => {
      const content = post.content;
      const image = post.media_attachments?.[0]?.url || "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg";
      console.log(image)

      // Capturar e remover o título do conteúdo
      let titleEn = '';
      let titlePt = '';

      const titleMatch = tootRegex.exec(content); // Extrair EN e PT-BR
      if (titleMatch) {
        // Procurar título em inglês e português dentro de cada bloco
        const enBlock = titleMatch[1].trim();
        const ptBlock = titleMatch[2].trim();

        const titleEnMatch = titleRegex.exec(enBlock);
        if (titleEnMatch) {
          titleEn = stripHtml(titleEnMatch[1].trim()); // Extrair título em inglês
        }

        const titlePtMatch = titleRegex.exec(ptBlock);
        if (titlePtMatch) {
          titlePt = stripHtml(titlePtMatch[1].trim()); // Extrair título em português
        }

        // Remover títulos dos blocos
        const enText = stripHtml(enBlock.replace(titleRegex, '').trim());
        const ptText = stripHtml(ptBlock.replace(titleRegex, '').trim());

        // Adicionar título ao i18n
        i18n.global.setLocaleMessage('en', {
          ...i18n.global.getLocaleMessage('en'),
          mastodon_title: {
            ...i18n.global.getLocaleMessage('en').mastodon_title,
            [`post${index + 1}`]: titleEn
          },
          mastodon_toot: {
            ...i18n.global.getLocaleMessage('en').mastodon_toot,
            [`post${index + 1}`]: enText.replace('&#39;', "'")
          },
          mastodon_img: {
            ...i18n.global.getLocaleMessage('en').mastodon_img,
            [`post${index + 1}`]: image // Armazena cada imagem em um índice correspondente.
          }
        });

        i18n.global.setLocaleMessage('pt', {
          ...i18n.global.getLocaleMessage('pt'),
          mastodon_title: {
            ...i18n.global.getLocaleMessage('pt').mastodon_title,
            [`post${index + 1}`]: titlePt
          },
          mastodon_toot: {
            ...i18n.global.getLocaleMessage('pt').mastodon_toot,
            [`post${index + 1}`]: ptText.replace('&#39;', "'")
          }
        });
      }
    });

    console.log('Posts do Mastodon adicionados às mensagens');
  } catch (error) {
    console.error('Erro ao buscar posts do Mastodon:', error);
  }
}

// Configuração do i18n
const i18n = createI18n({
  locale: 'en',
  messages
});

const app = createApp(App).use(router).use(i18n);

// Buscar os posts e monta o app
fetchMastodonPosts(i18n).then(() => {
  app.mount('#app');
});
