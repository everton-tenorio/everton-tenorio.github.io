import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'


// Defina as traduções para cada idioma
const messages = {
  en: {
    greeting: 'Hello!',
    description: 'This is a sample description in English.',
    aboutme: "I use data science techniques, web development, cloud, and automation in personal and professional projects. <br><button class='email-btn' style='color:white;border-radius:50px;'><a href='https://t.me/evertontenorio' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:27px'></i></a></button><a href='mailto:evttenorio@outlook.com?subject=Tecnologia'><button class='email-btn' style='border-radius:50px'><i class='fa fa-envelope' style='font-size:25px;'></i></button></a>",
    sofutebas: "Find out where to watch live football/soccer on TV and online. <br><br><br><a href='https://sofutebol.live/'><span style='float:right;border:1px solid black;padding: 5px;border-radius:5px;background:black; color:white' id='img-sft'>sofutebol<i style='color:red;font-size:20px;'>.</i>live</span><br></a>",
    precofipe: "Check the average price of vehicles and the variation by year based on FIPE (a reference table for vehicle prices in Brazil). <br><br><br><a href='https://preco-fipe.vercel.app'><span style='border:1px solid black;padding: 8px;border-radius:5px;background:black; color:white'>🏎️  https://preco-fipe.vercel.app/</span><br><br></a>",
    devto: 'The website <i>dev.to</i> is a social network for programmers, where I see programming and hacking techniques. Whenever possible, I also share something related to technology.',
    newssummary: 'News summary using Artificial Intelligence',
    badgeia: 'AI-generated summary',
    leia: 'Read',
    verge: '2004 was the first year of the future',
    vergenews: 'In 2004, the digital world we know today was born. Major innovations like Facebook, Gmail, Firefox, and Flickr were launched, and Google went public, solidifying its dominance. Web 2.0 began reshaping the internet, with terms like "blog" and "long tail" gaining prominence. While movie sequels dominated cinemas and Apple introduced new devices, 2004 became a pivotal year for technology, shaping the way we connect and interact online today.',
    sofutebol: 'Football/Soccer: the complete schedule of today’s games | sofutebol.live',
    drex: 'Guide to Drex: what it is and how Digital Real works',
    drexnews: 'Drex is the official digital currency of Brazil, launched by the Central Bank (BC), with the goal of modernizing financial transactions and increasing inclusion in the financial market. It will be an extension of the physical real, enabling digital transfers and payments. Among the main advantages are cost reduction, greater legal security and privacy, and the ability to conduct transactions 24/7. Drex will also allow the use of smart contracts, promoting innovation in the financial market and creating new investment and credit opportunities.',
    arstech: 'Cheap AI “video scraping” can now extract data from any screen recording',
    arstechnews: 'Recently, AI researcher Simon Willison needed to sum the charges for a cloud service, but the information was scattered across several emails. To avoid manual work, he used a technique called "video scraping," which involves feeding a screen recording into an AI model for data extraction. He used Google AI Studio, with the Gemini 1.5 Flash model, to extract data from a 35-second video. The AI converted the data into JSON, including dates and monetary values, and Willison formatted it into a CSV table. The process cost less than a tenth of a cent, a surprise for Willison, who realized the potential of multimodal models (audio, video, image, and text) to interact with visual data. He sees "video scraping" as a way to bypass data extraction barriers in certain formats and believes this technique will see increasing use, highlighting both the benefits and potential privacy concerns.'
  },
  pt: {
    greeting: 'Olá!',
    description: 'Esta é uma descrição de exemplo em português.',
    aboutme: "Utilizo técnicas de ciência de dados, desenvolvimento web, cloud e automação em projetos pessoais e profissionais. <br><button class='email-btn' style='color:white;border-radius:50px;'><a href='https://t.me/evertontenorio' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:27px'></i></a></button><a href='mailto:evttenorio@outlook.com?subject=Tecnologia'><button class='email-btn' style='border-radius:50px'><i class='fa fa-envelope' style='font-size:25px;'></i></button></a>",
    sofutebas: "Saiba onde assistir futebol ao vivo na TV e online. <br><br><br><a href='https://sofutebol.live/'><span style='float:right;border:1px solid black;padding: 5px;border-radius:5px;background:black; color:white' id='img-sft'>sofutebol<i style='color:red;font-size:20px;'>.</i>live</span><br></a>",
    precofipe: "Consulte o preço médio dos veículos e a variação por ano com base na FIPE. <br><br><br><a href='https://preco-fipe.vercel.app'><span style='border:1px solid black;padding: 8px;border-radius:5px;background:black; color:white'>🏎️  https://preco-fipe.vercel.app/</span><br><br></a>",
    devto: 'O site <i>dev.to</i> é uma rede social para programadores, lá vejo técnicas de programação e hacking, sempre que possível compartilho algo de tecnologia também.',
    newssummary: 'Resumo de notícias utilizando Inteligência Artifical',
    badgeia: 'Resumo gerado por I.A.',
    leia: 'Leia',
    verge: '2004, o primeiro ano do futuro',
    vergenews: 'Em 2004, o mundo digital que conhecemos hoje nasceu. Grandes inovações como Facebook, Gmail, Firefox e Flickr foram lançadas, e o Google abriu seu capital, consolidando seu domínio. A Web 2.0 começou a reformular a internet, com termos como "blog" e "cauda longa" ganhando destaque. Enquanto sequências de filmes dominavam os cinemas e a Apple apresentava novos dispositivos, 2004 se tornou um ano decisivo para a tecnologia, moldando a forma como nos conectamos e interagimos online hoje.',
    sofutebol: 'Futebol: a programação completa dos jogos de hoje | sofutebol.live',
    drex: 'Guia sobre o Drex: o que é e como funciona o Real Digital',
    drexnews: 'O Drex é a moeda digital oficial do Brasil, lançada pelo Banco Central (BC), com o objetivo de modernizar as transações financeiras e aumentar a inclusão no mercado financeiro. Ela será uma extensão do real físico, permitindo transferências e pagamentos de maneira digital. Entre as principais vantagens, estão a redução de custos, maior segurança jurídica e privacidade, e a possibilidade de realizar transações 24/7. O Drex também permitirá o uso de contratos inteligentes, promovendo inovação no mercado financeiro e criando novas oportunidades de investimento e crédito. ',
    arstech: 'A "extração de vídeos" com IA agora pode obter dados de qualquer gravação de tela.',
    arstechnews: 'Recentemente, o pesquisador de IA Simon Willison precisava somar os valores de cobranças de um serviço em nuvem, mas as informações estavam espalhadas em vários e-mails. Para evitar o trabalho manual, ele usou uma técnica chamada "video scraping", que consiste em alimentar uma gravação de tela em um modelo de IA para extração de dados. Ele utilizou o Google AI Studio, com o modelo Gemini 1.5 Flash, para extrair dados de um vídeo de 35 segundos. A IA converteu os dados em JSON, incluindo datas e valores monetários, e Willison os formatou em uma tabela CSV. O processo custou menos de um décimo de centavo, uma surpresa para Willison, que percebeu o potencial de modelos multimodais (áudio, vídeo, imagem e texto) para interagir com dados visuais. Ele vê o "video scraping" como uma forma de contornar barreiras de extração de dados em certos formatos e acredita que essa técnica terá um uso crescente, destacando tanto os benefícios quanto as possíveis preocupações com privacidade.'
  }
}

const i18n = createI18n({
  locale: 'en',
  messages
})


createApp(App).use(router).use(i18n).mount('#app')

