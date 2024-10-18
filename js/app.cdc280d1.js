(function(){"use strict";var e={2848:function(e,t,o){var a=o(5130),n=o(6768),i=o(4232);const s={id:"app"},r=(0,n.Fv)('<div class="profile"><div class="profile-img"><img src="https://avatars.githubusercontent.com/u/114461163?v=4" alt="Foto de Perfil" class="evt-img"></div><h1>Everton Tenório</h1><p class="contact"><a href="https://t.me/evertontenorio" target="_blank" class="telegram-icon"><i class="fab fa-telegram-plane" style="color:white;"></i></a></p></div><div class="links"><a href="https://github.com/everton-tenorio"><button class="link-btn"><i class="fa-brands fa-github"></i> GitHub</button></a><a href="https://dev.to/evertontenorio"><button class="link-btn"><i class="fa-brands fa-dev"></i> dev.to</button></a></div>',2),l={class:"modal"},c={class:"modal-title"},d={class:"modal-content"},u={key:0},p={key:1};function f(e,t,o,f,v,b){const m=(0,n.g2)("EvttsComponent");return(0,n.uX)(),(0,n.CE)("div",s,[r,(0,n.bF)(a.eB,{name:"fade"},{default:(0,n.k6)((()=>[v.selectedLink?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:t[1]||(t[1]=(0,a.D$)(((...e)=>b.closeModal&&b.closeModal(...e)),["self"]))},[(0,n.Lk)("div",l,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>b.closeModal&&b.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h2",c,(0,i.v_)(v.selectedLink),1),(0,n.Lk)("div",d,["GitHub"===v.selectedLink?((0,n.uX)(),(0,n.CE)("p",u," Github ")):(0,n.Q3)("",!0),"dev.to"===v.selectedLink?((0,n.uX)(),(0,n.CE)("p",p," Leia meus artigos técnicos no dev.to, onde compartilho insights sobre programação e tecnologia. ")):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(m)])}const v=e=>((0,n.Qi)("data-v-561a9af6"),e=e(),(0,n.jt)(),e),b={class:"slider-container"},m={class:"card-content"},g=v((()=>(0,n.Lk)("div",{class:"clonett"},[(0,n.Lk)("img",{src:"https://avatars.githubusercontent.com/u/114461163?v=4",alt:"Foto de Perfil",class:"evtt"}),(0,n.Lk)("h3",null,"@everton.py")],-1))),h={style:{"margin-top":"-10px","margin-left":"40px"}},k=["innerHTML"];function x(e,t,o,a,s,r){const l=(0,n.g2)("slide"),c=(0,n.g2)("navigation"),d=(0,n.g2)("pagination"),u=(0,n.g2)("carousel");return(0,n.uX)(),(0,n.CE)("div",b,[(0,n.bF)(u,{"items-to-show":1.5,pagination:!1,navigation:!0},{addons:(0,n.k6)((()=>[(0,n.bF)(c),(0,n.bF)(d)])),default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.messages,(e=>((0,n.uX)(),(0,n.Wv)(l,{key:e.message_id,class:"card"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",m,[g,(0,n.Lk)("p",h,(0,i.v_)(e.message_id),1),(0,n.Lk)("p",{innerHTML:e.text},null,8,k)])])),_:2},1024)))),128))])),_:1})])}var y=o(1114),L={name:"MessageSlider",components:{Carousel:y.FN,Slide:y.q7,Pagination:y.dK,Navigation:y.Vx},data(){return{messages:[{message_id:"#tecnologia",text:"Utilizo técnicas de ciência de dados, desenvolvimento web, cloud e automação para resolver projetos pessoais e profissionais. <br><button class='email-btn' style='color:white;border-radius:50px;'><a href='https://t.me/evertontenorio' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:27px'></i></a></button><a href='mailto:evttenorio@outlook.com?subject=Tecnologia'><button class='email-btn' style='border-radius:50px'><i class='fa fa-envelope' style='font-size:25px;'></i></button></a>"},{message_id:"#futebol",text:"Saiba onde assistir futebol ao vivo na TV e online. <br><br><br><a href='https://sofutebol.live/'><span style='float:right;border:1px solid black;padding: 5px;border-radius:5px;background:black; color:white' id='img-sft'>sofutebol<i style='color:red;font-size:20px;'>.</i>live</span><br></a>"},{message_id:"#economia",text:"Consulte o preço médio dos veículos e a variação por ano com base na FIPE. <br><br><br><a href='https://preco-fipe.vercel.app'><span style='border:1px solid black;padding: 8px;border-radius:5px;background:black; color:white'>🏎️  https://preco-fipe.vercel.app/</span><br><br></a>"},{message_id:"",text:"O site <i>dev.to</i> é uma rede social para programadores, lá vejo técnicas de programação e hacking, sempre que possível compartilho algo de tecnologia também."}]}},methods:{enviarEmail(){window.location="mailto:evttenorio@outlook.com?subject=Tecnologia"}}},_=o(1241);const w=(0,_.A)(L,[["render",x],["__scopeId","data-v-561a9af6"]]);var C=w,E={data(){return{selectedLink:null}},components:{EvttsComponent:C},methods:{openModal(e){this.selectedLink=e},closeModal(){this.selectedLink=null}}};const F=(0,_.A)(E,[["render",f]]);var O=F,j=o(1387);const M=[{path:"/",name:"home"}],T=(0,j.aE)({history:(0,j.LA)("/"),routes:M});var X=T;(0,a.Ef)(O).use(X).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,i){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],i=e[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](a[l])}))?a.splice(l--,1):(r=!1,i<s&&(s=i));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,i,s=a[0],r=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var d=l(o)}for(t&&t(a);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},a=self["webpackChunkprofile"]=self["webpackChunkprofile"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(2848)}));a=o.O(a)})();
//# sourceMappingURL=app.cdc280d1.js.map