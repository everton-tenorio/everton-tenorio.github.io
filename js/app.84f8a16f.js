(function(){"use strict";var e={8981:function(e,a,o){var t=o(5130),s=o(5931),n=o(6768),i=o(4232);const l={id:"app"},r={class:"profile"},c=(0,n.Lk)("div",{class:"profile-img"},[(0,n.Lk)("img",{src:"https://avatars.githubusercontent.com/u/114461163?v=4",alt:"Foto de Perfil",class:"evt-img"})],-1),d=(0,n.Lk)("h1",null,"Everton Tenório",-1),u={class:"contact"},m={class:"language-switcher"},p=(0,n.Fv)('<span class="slider round"></span><span class="select-ptbr"><img src="https://cdn-icons-png.flaticon.com/512/555/555417.png" width="20px" height="20px"></span><span class="select-en"><img src="https://cdn-icons-png.flaticon.com/128/630/630591.png" width="21px" height="21px"></span>',3),g={class:"links"},h=(0,n.Lk)("a",{href:"https://github.com/everton-tenorio"},[(0,n.Lk)("button",{class:"link-btn"},[(0,n.Lk)("i",{id:"iconaw",class:"fa-brands fa-github"}),(0,n.eW)(" GitHub")])],-1),v={href:"https://dev.to/evertontenorio"},f={class:"link-btn"},b=(0,n.Lk)("i",{id:"iconaw",class:"fa-brands fa-dev"},null,-1),k={class:"modal"},w={class:"modal-title"},x={class:"modal-content"},L={key:0},y={key:1};function _(e,a,o,s,_,C){const E=(0,n.g2)("EvttsComponent"),F=(0,n.g2)("NewsComponent");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("div",r,[c,d,(0,n.Lk)("p",u,[(0,n.Lk)("label",m,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=a=>e.isEnglish=a),onChange:a[1]||(a[1]=(...e)=>C.toggleLanguage&&C.toggleLanguage(...e))},null,544),[[t.lH,e.isEnglish]]),p])])]),(0,n.Lk)("div",g,[h,(0,n.Lk)("a",v,[(0,n.Lk)("button",f,[b,(0,n.eW)(" "+(0,i.v_)(e.$t("devto_me")),1)])])]),(0,n.bF)(t.eB,{name:"fade"},{default:(0,n.k6)((()=>[_.selectedLink?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:a[3]||(a[3]=(0,t.D$)(((...e)=>C.closeModal&&C.closeModal(...e)),["self"]))},[(0,n.Lk)("div",k,[(0,n.Lk)("button",{onClick:a[2]||(a[2]=(...e)=>C.closeModal&&C.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h2",w,(0,i.v_)(_.selectedLink),1),(0,n.Lk)("div",x,["GitHub"===_.selectedLink?((0,n.uX)(),(0,n.CE)("p",L," Github ")):(0,n.Q3)("",!0),"dev.to"===_.selectedLink?((0,n.uX)(),(0,n.CE)("p",y," Leia meus artigos técnicos no dev.to, onde compartilho insights sobre programação e tecnologia. ")):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(E),(0,n.bF)(F)])}const C=e=>((0,n.Qi)("data-v-75958228"),e=e(),(0,n.jt)(),e),E={class:"slider-container"},F={class:"card-content"},M=C((()=>(0,n.Lk)("div",{class:"clonett"},[(0,n.Lk)("img",{src:"https://avatars.githubusercontent.com/u/114461163?v=4",alt:"Foto de Perfil",class:"evtt"}),(0,n.Lk)("h3",null,"@everton.py")],-1))),$={style:{"margin-top":"-10px","margin-left":"40px"}},N=["innerHTML"];function j(e,a,o,t,s,l){const r=(0,n.g2)("slide"),c=(0,n.g2)("navigation"),d=(0,n.g2)("pagination"),u=(0,n.g2)("carousel");return(0,n.uX)(),(0,n.CE)("div",E,[(0,n.bF)(u,{"items-to-show":1.5,pagination:!1,navigation:!0},{addons:(0,n.k6)((()=>[(0,n.bF)(c),(0,n.bF)(d)])),default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.messages,(e=>((0,n.uX)(),(0,n.Wv)(r,{key:e.message_id,class:"card"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",F,[M,(0,n.Lk)("p",$,(0,i.v_)(e.message_id),1),(0,n.Lk)("p",{innerHTML:e.text},null,8,N)])])),_:2},1024)))),128))])),_:1})])}var A=o(1114),I={name:"MessageSlider",components:{Carousel:A.FN,Slide:A.q7,Pagination:A.dK,Navigation:A.Vx},data(){return{messages:[{message_id:"#tech",text:this.$t("aboutme",{email:"evttenorio@outlook.com"})},{message_id:"",text:this.$t("precofipe")},{message_id:"",text:this.$t("devto")}]}},watch:{"$i18n.locale":function(){this.updateMessages()}},methods:{enviarEmail(){window.location="mailto:evttenorio@outlook.com?subject=Tecnologia"},updateMessages(){this.messages[0].text=this.$t("aboutme",{email:"evttenorio@outlook.com"}),this.messages[1].text=this.$t("precofipe"),this.messages[2].text=this.$t("devto")}},mounted(){this.updateMessages()}},z=o(1241);const q=(0,z.A)(I,[["render",j],["__scopeId","data-v-75958228"]]);var W=q,O=o.p+"img/sofutebol.2815f0f0.png";const T={class:"news"},D={class:"cards-container"},G=(0,n.Lk)("h2",null,[(0,n.eW)("News"),(0,n.Lk)("span",null," gmn")],-1),S={style:{"font-size":"12px","margin-top":"-20px",color:"gray"}},X={class:"all-cards"},P=["onClick"],B=["src"],H=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1),R=(0,n.Lk)("img",{class:"img-news",src:"https://cdn.vox-cdn.com/thumbor/r0zpb7jtV22KFWAHGD1q68jSqWk=/95x194:1946x1166/fit-in/1851x972/cdn.vox-cdn.com/uploads/chorus_asset/file/25681754/2004_CHORUS_LEDE2.jpg",alt:"News image"},null,-1),Q=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1),V={class:"card-news"},K={href:"https://sofutebol.live",style:{color:"black"}},U=(0,n.Lk)("img",{class:"img-news",src:O,alt:"News image"},null,-1),J=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1),Y=(0,n.Lk)("img",{class:"img-news",src:"https://www.infomoney.com.br/wp-content/uploads/2021/11/economia_1609210416_0.jpg?quality=70",alt:"News image"},null,-1),Z=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1),ee=(0,n.Lk)("img",{class:"img-news",src:"https://cdn.arstechnica.net/wp-content/uploads/2024/10/abstract_cubes.jpg",alt:"News image"},null,-1),ae=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1),oe={class:"modal"},te={class:"modal-title"},se={class:"modal-content"},ne={id:"badge-ia"},ie=(0,n.Lk)("i",{class:"fa-solid fa-microchip"},null,-1),le={style:{"font-size":"14px"}},re={style:{"font-size":"10px"}},ce=(0,n.Lk)("a",{href:"https://www.theverge.com/c/24247055/2004-tech-internet-gadgets-phones-pop-culture"},"https://www.theverge.com/c/24247055/2004-tech-internet-gadgets-phones-pop-culture",-1),de={class:"modal"},ue={class:"modal-title"},me={class:"modal-content"},pe={id:"badge-ia"},ge=(0,n.Lk)("i",{class:"fa-solid fa-microchip"},null,-1),he={style:{"font-size":"14px"}},ve={style:{"font-size":"10px"}},fe=(0,n.Lk)("a",{href:"https://www.infomoney.com.br/guias/drex-real-digital/"}," https://www.infomoney.com.br/guias/drex-real-digital/",-1),be={class:"modal"},ke={class:"modal-title"},we={class:"modal-content"},xe={id:"badge-ia"},Le=(0,n.Lk)("i",{class:"fa-solid fa-microchip"},null,-1),ye={style:{"font-size":"14px"}},_e={style:{"font-size":"10px"}},Ce=(0,n.Lk)("a",{href:"https://arstechnica.com/ai/2024/10/cheap-ai-video-scraping-can-now-extract-data-from-any-screen-recording/"}," https://arstechnica.com/ai/2024/10/cheap-ai-video-scraping-can-now-extract-data-from-any-screen-recording/",-1);function Ee(e,a,o,s,l,r){return(0,n.uX)(),(0,n.CE)("div",T,[(0,n.Lk)("div",D,[G,(0,n.Lk)("p",S,(0,i.v_)(e.$t("newssummary")),1),(0,n.Lk)("div",X,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.news,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,onClick:a=>r.openModal(e),class:"card-news"},[(0,n.Lk)("img",{class:"img-news",src:e.image,alt:"News image"},null,8,B),(0,n.Lk)("h4",null,(0,i.v_)(e.title),1),H],8,P)))),128)),(0,n.Lk)("div",{class:"card-news",onClick:a[0]||(a[0]=e=>r.openModal("verge"))},[R,(0,n.Lk)("h4",null,(0,i.v_)(e.$t("verge")),1),Q]),(0,n.Lk)("div",V,[(0,n.Lk)("a",K,[U,(0,n.Lk)("h4",null,(0,i.v_)(e.$t("sofutebol")),1),J])])]),(0,n.Lk)("div",{class:"card-news",onClick:a[1]||(a[1]=e=>r.openModal("infomoney"))},[Y,(0,n.Lk)("h4",null,(0,i.v_)(e.$t("drex")),1),Z]),(0,n.Lk)("div",{class:"card-news",onClick:a[2]||(a[2]=e=>r.openModal("arstech"))},[ee,(0,n.Lk)("h4",null,(0,i.v_)(e.$t("arstech")),1),ae]),(0,n.bF)(t.eB,{name:"fade"},{default:(0,n.k6)((()=>["verge"===l.selectedNews?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:a[4]||(a[4]=(0,t.D$)(((...e)=>r.closeModal&&r.closeModal(...e)),["self"]))},[(0,n.Lk)("div",oe,[(0,n.Lk)("button",{onClick:a[3]||(a[3]=(...e)=>r.closeModal&&r.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h3",te,(0,i.v_)(l.selectedNews.title)+(0,i.v_)(e.$t("verge")),1),(0,n.Lk)("div",se,[(0,n.Lk)("span",ne,[ie,(0,n.eW)(" "+(0,i.v_)(e.$t("badgeia")),1)]),(0,n.Lk)("p",le,(0,i.v_)(l.selectedNews.summary)+" "+(0,i.v_)(e.$t("vergenews")),1),(0,n.Lk)("p",re,[(0,n.eW)((0,i.v_)(e.$t("leia"))+": ",1),ce])])])])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(t.eB,null,{default:(0,n.k6)((()=>["infomoney"===l.selectedNews?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:a[6]||(a[6]=(0,t.D$)(((...e)=>r.closeModal&&r.closeModal(...e)),["self"]))},[(0,n.Lk)("div",de,[(0,n.Lk)("button",{onClick:a[5]||(a[5]=(...e)=>r.closeModal&&r.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h3",ue,(0,i.v_)(l.selectedNews.title)+(0,i.v_)(e.$t("drex")),1),(0,n.Lk)("div",me,[(0,n.Lk)("span",pe,[ge,(0,n.eW)(" "+(0,i.v_)(e.$t("badgeia")),1)]),(0,n.Lk)("p",he,(0,i.v_)(l.selectedNews.summary)+" "+(0,i.v_)(e.$t("drexnews")),1),(0,n.Lk)("p",ve,[(0,n.eW)((0,i.v_)(e.$t("leia"))+": ",1),fe])])])])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(t.eB,null,{default:(0,n.k6)((()=>["arstech"===l.selectedNews?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:a[8]||(a[8]=(0,t.D$)(((...e)=>r.closeModal&&r.closeModal(...e)),["self"]))},[(0,n.Lk)("div",be,[(0,n.Lk)("button",{onClick:a[7]||(a[7]=(...e)=>r.closeModal&&r.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h3",ke,(0,i.v_)(l.selectedNews.title)+" "+(0,i.v_)(e.$t("arstech")),1),(0,n.Lk)("div",we,[(0,n.Lk)("span",xe,[Le,(0,n.eW)(" "+(0,i.v_)(e.$t("badgeia")),1)]),(0,n.Lk)("p",ye,(0,i.v_)(l.selectedNews.summary)+" "+(0,i.v_)(e.$t("arstechnews")),1),(0,n.Lk)("p",_e,[(0,n.eW)((0,i.v_)(e.$t("leia"))+": ",1),Ce])])])])):(0,n.Q3)("",!0)])),_:1})])])}var Fe={data(){return{news:[],selectedNews:null}},methods:{async fetchNews(){try{console.log("sofutebol.live").catch((e=>console.error("Erro:",e)))}catch(e){console.log("sofutebol.live")}},openModal(e){this.selectedNews=e},closeModal(){this.selectedNews=null}},mounted(){this.fetchNews()}};const Me=(0,z.A)(Fe,[["render",Ee]]);var $e=Me,Ne={data(){return{selectedLink:null}},components:{EvttsComponent:W,NewsComponent:$e},computed:{currentLanguage(){return this.$i18n.locale}},methods:{openModal(e){this.selectedLink=e},closeModal(){this.selectedLink=null},toggleLanguage(){const e="en"===this.currentLanguage?"pt":"en";this.$i18n.locale=e,localStorage.setItem("language",e)}}};const je=(0,z.A)(Ne,[["render",_]]);var Ae=je,Ie=o(1387);const ze=[{path:"/",name:"home"}],qe=(0,Ie.aE)({history:(0,Ie.LA)("/"),routes:ze});var We=qe;const Oe={en:{greeting:"Hello!",description:"This is a sample description in English.",aboutme:"I use data science techniques, web development, cloud, and automation in personal and professional projects. <br><button class='email-btn' style='color:white;border-radius:50px;'><a href='https://t.me/evertontenorio' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:27px'></i></a></button><a href='mailto:{email}?subject=Tecnologia'><button class='email-btn' style='border-radius:50px'><i class='fa fa-envelope' style='font-size:25px;'></i></button></a>",devto_me:"Tech Posts: Python, Data Extraction, Finance, etc.",sofutebas:"Find out where to watch live football/soccer on TV and online. <br><br><br><a href='https://sofutebol.live/'><span style='float:right;border:1px solid black;padding: 5px;border-radius:5px;background:black; color:white' id='img-sft'>sofutebol<i style='color:red;font-size:20px;'>.</i>live</span><br></a>",precofipe:"Check the average price of vehicles and the variation by year based on FIPE (a reference table for vehicle prices in Brazil). <br><br><br><a href='https://preco-fipe.vercel.app'><span style='border:1px solid black;padding: 8px;border-radius:5px;background:black; color:white'>🏎️  https://preco-fipe.vercel.app/</span><br><br></a>",devto:"The website <i>dev.to</i> is a social network for programmers, where I see programming and hacking techniques. Whenever possible, I also share something related to technology.",newssummary:"News summary using Artificial Intelligence",badgeia:"AI-generated summary",leia:"Read",verge:"2004 was the first year of the future",vergenews:'In 2004, the digital world we know today was born. Major innovations like Facebook, Gmail, Firefox, and Flickr were launched, and Google went public, solidifying its dominance. Web 2.0 began reshaping the internet, with terms like "blog" and "long tail" gaining prominence. While movie sequels dominated cinemas and Apple introduced new devices, 2004 became a pivotal year for technology, shaping the way we connect and interact online today.',sofutebol:"Football/Soccer: the complete schedule of today’s games | sofutebol.live",drex:"Guide to Drex: what it is and how Digital Real works",drexnews:"Drex is the official digital currency of Brazil, launched by the Central Bank (BC), with the goal of modernizing financial transactions and increasing inclusion in the financial market. It will be an extension of the physical real, enabling digital transfers and payments. Among the main advantages are cost reduction, greater legal security and privacy, and the ability to conduct transactions 24/7. Drex will also allow the use of smart contracts, promoting innovation in the financial market and creating new investment and credit opportunities.",arstech:"Cheap AI “video scraping” can now extract data from any screen recording",arstechnews:'Recently, AI researcher Simon Willison needed to sum the charges for a cloud service, but the information was scattered across several emails. To avoid manual work, he used a technique called "video scraping," which involves feeding a screen recording into an AI model for data extraction. He used Google AI Studio, with the Gemini 1.5 Flash model, to extract data from a 35-second video. The AI converted the data into JSON, including dates and monetary values, and Willison formatted it into a CSV table. The process cost less than a tenth of a cent, a surprise for Willison, who realized the potential of multimodal models (audio, video, image, and text) to interact with visual data. He sees "video scraping" as a way to bypass data extraction barriers in certain formats and believes this technique will see increasing use, highlighting both the benefits and potential privacy concerns.'},pt:{greeting:"Olá!",description:"Esta é uma descrição de exemplo em português.",aboutme:"Utilizo técnicas de ciência de dados, desenvolvimento web, cloud e automação em projetos pessoais e profissionais. <br><button class='email-btn' style='color:white;border-radius:50px;'><a href='https://t.me/evertontenorio' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:27px'></i></a></button><a href='mailto:{email}?subject=Tecnologia'><button class='email-btn' style='border-radius:50px'><i class='fa fa-envelope' style='font-size:25px;'></i></button></a>",devto_me:"Tech Posts: Python, Extração de Dados, Finanças, etc.",sofutebas:"Saiba onde assistir futebol ao vivo na TV e online. <br><br><br><a href='https://sofutebol.live/'><span style='float:right;border:1px solid black;padding: 5px;border-radius:5px;background:black; color:white' id='img-sft'>sofutebol<i style='color:red;font-size:20px;'>.</i>live</span><br></a>",precofipe:"Consulte o preço médio dos veículos e a variação por ano com base na FIPE. <br><br><br><a href='https://preco-fipe.vercel.app'><span style='border:1px solid black;padding: 8px;border-radius:5px;background:black; color:white'>🏎️  https://preco-fipe.vercel.app/</span><br><br></a>",devto:"O site <i>dev.to</i> é uma rede social para programadores, lá vejo técnicas de programação e hacking, sempre que possível compartilho algo de tecnologia também.",newssummary:"Resumo de notícias utilizando Inteligência Artifical",badgeia:"Resumo gerado por I.A.",leia:"Leia",verge:"2004, o primeiro ano do futuro",vergenews:'Em 2004, o mundo digital que conhecemos hoje nasceu. Grandes inovações como Facebook, Gmail, Firefox e Flickr foram lançadas, e o Google abriu seu capital, consolidando seu domínio. A Web 2.0 começou a reformular a internet, com termos como "blog" e "cauda longa" ganhando destaque. Enquanto sequências de filmes dominavam os cinemas e a Apple apresentava novos dispositivos, 2004 se tornou um ano decisivo para a tecnologia, moldando a forma como nos conectamos e interagimos online hoje.',sofutebol:"Futebol: a programação completa dos jogos de hoje | sofutebol.live",drex:"Guia sobre o Drex: o que é e como funciona o Real Digital",drexnews:"O Drex é a moeda digital oficial do Brasil, lançada pelo Banco Central (BC), com o objetivo de modernizar as transações financeiras e aumentar a inclusão no mercado financeiro. Ela será uma extensão do real físico, permitindo transferências e pagamentos de maneira digital. Entre as principais vantagens, estão a redução de custos, maior segurança jurídica e privacidade, e a possibilidade de realizar transações 24/7. O Drex também permitirá o uso de contratos inteligentes, promovendo inovação no mercado financeiro e criando novas oportunidades de investimento e crédito. ",arstech:'A "extração de vídeos" com IA agora pode obter dados de qualquer gravação de tela.',arstechnews:'Recentemente, o pesquisador de IA Simon Willison precisava somar os valores de cobranças de um serviço em nuvem, mas as informações estavam espalhadas em vários e-mails. Para evitar o trabalho manual, ele usou uma técnica chamada "video scraping", que consiste em alimentar uma gravação de tela em um modelo de IA para extração de dados. Ele utilizou o Google AI Studio, com o modelo Gemini 1.5 Flash, para extrair dados de um vídeo de 35 segundos. A IA converteu os dados em JSON, incluindo datas e valores monetários, e Willison os formatou em uma tabela CSV. O processo custou menos de um décimo de centavo, uma surpresa para Willison, que percebeu o potencial de modelos multimodais (áudio, vídeo, imagem e texto) para interagir com dados visuais. Ele vê o "video scraping" como uma forma de contornar barreiras de extração de dados em certos formatos e acredita que essa técnica terá um uso crescente, destacando tanto os benefícios quanto as possíveis preocupações com privacidade.'}},Te=(0,s.hU)({locale:"en",messages:Oe});(0,t.Ef)(Ae).use(We).use(Te).mount("#app")}},a={};function o(t){var s=a[t];if(void 0!==s)return s.exports;var n=a[t]={exports:{}};return e[t].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(a,t,s,n){if(!t){var i=1/0;for(d=0;d<e.length;d++){t=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,r=0;r<t.length;r++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](t[r])}))?t.splice(r--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var c=s();void 0!==c&&(a=c)}}return a}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,s,n]}}(),function(){o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,{a:a}),a}}(),function(){o.d=function(e,a){for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(a){return 0===e[a]};var a=function(a,t){var s,n,i=t[0],l=t[1],r=t[2],c=0;if(i.some((function(a){return 0!==e[a]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(r)var d=r(o)}for(a&&a(t);c<i.length;c++)n=i[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},t=self["webpackChunkprofile"]=self["webpackChunkprofile"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(8981)}));t=o.O(t)})();
//# sourceMappingURL=app.84f8a16f.js.map