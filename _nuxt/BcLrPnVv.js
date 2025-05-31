const e=`---
title: " Web Scraping em Go: Notícias do Flamengo "
date: 2023-12-05
slug: web-scraping-com-go-coletando-noticias-do-flamengo
description: "Coletando as notícias boas."
tags: ["go", "scraping", "flamengo"]
bannerImage: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5bmbbvryh0la1eaoxbpx.png"
---

Quando o assunto é Web Scraping geralmente tem alguma coisa a ver com Python e suas bibliotecas populares como BeautifulSoup e Scrapy. 

Realizar web scraping eficientemente com Go também é possível. Neste artigo, um exemplo prático de um scraping utilizando a biblioteca *Colly* para coletar as notícias do site oficial do Flamengo.


![Site do Flamengo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5bmbbvryh0la1eaoxbpx.png) 

<sup>**Disclaimer Importante:**</sup>

<sup>*Este exemplo prático de web scraping tem como único propósito educacional e de demonstração técnica. A coleta de dados foi realizada para fins de estudo.*</sup>

<sup>*É crucial respeitar os termos de serviço e políticas de privacidade dos sites ao realizar atividades de web scraping. Todo o conteúdo, marcas, e propriedades intelectuais mencionadas no exemplo pertencem ao C.R. do Flamengo.*</sup>

Go!


### Setup Inicial

O código começa importando além das mais comuns, algumas bibliotecas essenciais para o projeto: 
 - \`github.com/gocolly/colly\` é usado para o scraping em si
 - \`github.com/go-telegram-bot-api/telegram-bot-api\` é para enviar as notícias via Telegram
 - \`github.com/joho/godotenv\` é utilizado para carregar variáveis de ambiente

O código completo está disponível [no github.](https://github.com/everton-tenorio/mengo-news/)

---

### Struct e Funções Auxiliares

Uma estrutura \`MengaoNews\` é definida para armazenar os dados de cada notícia. Além disso, a função contains é usada para verificar se um elemento está presente em uma lista de strings.

\`\`\`go
type MengaoNews struct {
	url, image, title, desc, date string
}

func contains(s []string, str string) bool {
	for _, v := range s {
		if v == str {
			return true
		}
	}
	return false
}
\`\`\`

---

### Inicializando o Coletor
Um novo coletor Colly é iniciado e é configurado um agente para simular uma requisição de um navegador. 

\`\`\`go
c := colly.NewCollector()
c.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
\`\`\`

---

### Manipuladores Colly - manipulando os elementos HTML

\`\`\`go

c.OnHTML("ul.pagination li a", func(e *colly.HTMLElement) {
    // Manipulador para descobrir novas páginas
})

c.OnHTML("ul.list-unstyled li", func(e *colly.HTMLElement) {
    // Manipulador para coletar dados das notícias
})
\`\`\`

\`c.OnHTML\` Registra um manipulador de função para ser executado quando encontrar elementos HTML que correspondam ao seletor CSS fornecido.

O Seletor CSS \`ul.pagination li a\` especifica que o manipulador será chamado para cada elemento âncora \`<a>\` dentro de um item de lista \`<li>\` em uma lista não ordenada \`<ul>\`.

#### Coleta de Dados das notícias 

Em \`c.OnHTML("ul.list-unstyled li",...)\` é extraído os dados específicos das notícias, como URL, imagem, título, descrição e data.

\`\`\`go

mengoPost.url = e.ChildAttr("a", "href")
mengoPost.image = e.ChildAttr("img", "src")
mengoPost.title = e.ChildText("h4.text-uppercase")
mengoPost.desc = e.ChildText("p.paragraph")
mengoPost.date = e.ChildText("span.destaque-span")
\`\`\`
\`e.ChildAttr(tag, attr)\`: Obtém o valor de um atributo (attr) de um elemento filho especificado (tag).
\`e.ChildText(tag)\`: Obtém o texto de um elemento filho especificado (tag).

---

### OnScraped - Ação que ocorre após Scraping de uma Página

\`\`\`go

c.OnScraped(func(response *colly.Response) {
    // ...
})
\`\`\`
\`c.OnScraped\` Registra um manipulador de função para ser executado após o scraping de uma página.
\`response *colly.Response\` Fornece acesso ao objeto de resposta da página que foi totalmente raspada.

Este método é útil para realizar operações que dependem do conteúdo completo da página, como armazenar os dados em um banco de dados, processar os resultados, ou qualquer ação pós-scraping necessária.

---

### c.Visit - Iniciando o Scraping de uma Página

Aqui é iniciado o scraping de uma página específica, seguindo os links e posteriormente executando os manipuladores registrados.

O método c.Visit é crucial para iniciar o processo de web scraping. Pode ser chamado uma vez para iniciar o scraping de uma página inicial, e durante o processo, pode ser chamado novamente para seguir links e continuar coletando dados de páginas subsequentes.

\`\`\`go

c.Visit(pageToScrape)
\`\`\`

---

### Telegram Bot Integration

Além do scraping, o bot do Telegram é integrado para enviar as notícias coletadas, facilitando a visualização das mesmas. O bot é configurado com o token e ID do chat, e as mensagens são formatadas para serem enviadas em formato HTML.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ook359dxqsdf5hltkvnb.gif" width="20%" />

\`\`\`go

bot, err := tgbotapi.NewBotAPI(telegramToken)
// ...

formatMessage := fmt.Sprintf("<a href='%s'>&#8205;</a><a href='%s'><b>%s</b></a>\\n<code>%s</code>\\n\\n%s",
    mengoPost.image,
    mengoPost.url,
    mengoPost.title,
    mengoPost.date,
    mengoPost.desc)
message := tgbotapi.NewMessageToChannel(chatID, formatMessage)
message.ParseMode = "HTML"
_, err = bot.Send(message)
// ...
\`\`\`

#### Conclusão

Com a biblioteca Colly, é possível realizar um web scraping de maneira eficaz e estruturada. Neste exemplo, foi feita a exploração desde a inicialização do coletor até a integração com um bot do Telegram.
`;export{e as default};
