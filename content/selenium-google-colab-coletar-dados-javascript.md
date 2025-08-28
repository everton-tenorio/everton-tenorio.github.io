---
title: Como usar Selenium no Google Colab para coletar dados de páginas que usam JavaScript
date: 2025-08-29
slug: selenium-google-colab-coletar-dados-javascript
description: ""
tags: [selenium, google colab, web scraping, javascript, python, headless, scraping avançado]
bannerImage: "https://i.ibb.co/hxqchgMv/selenium-portalfut.png"
---

Quando uma página carrega conteúdo **via JavaScript**, ferramentas como `requests` e `BeautifulSoup` não conseguem capturar o HTML renderizado.  
É aí que entra o **Selenium**, simulando um navegador real e permitindo acesso ao conteúdo final.  

No Google Colab, como não existe interface gráfica, usamos o **modo headless**, que executa o navegador sem abrir janela. Isso torna o processo leve e viável em um ambiente remoto.

---

## Instalação no Google Colab  

No Colab, basta instalar o `chromium-chromedriver` e o `selenium`:

```bash
!apt-get update
!apt-get install -y chromium-chromedriver
!pip install selenium
```

<img href="https://i.ibb.co/cS8pRZns/Screenshot-2025-08-28-at-11-25-00-Untitled0-ipynb-Colab.png" />

---

## Portalfut.com

O site acessado será o `portalfut.com`, um agregador de notícias de Futebol. Um exemplo de site que carrega conteúdo via Javascript.

<img href="https://i.ibb.co/p6dysWyn/Screenshot-2025-08-28-at-11-27-02-Portal-Fut-Not-cias-e-Agenda-de-Futebol.png"/>

## Código de Exemplo

O script abaixo acessa o site, captura o título da página e em seguida coleta as 5 primeiras notícias renderizadas via JavaScript.

<img href="https://i.ibb.co/9H7x1dF1/Screenshot-2025-08-28-at-11-25-27-Untitled0-ipynb-Colab.png" />

<img href="https://i.ibb.co/XkF0CYY7/Screenshot-2025-08-28-at-11-28-15-Untitled0-ipynb-Colab.png" />


> Note que usamos o seletor `div.bg-gray-900 a` para identificar os blocos de notícias. Dentro de cada card, extraímos o título (tag `<h3>`) e o link (`href` do `<a>`).

---

## Estrutura e Observações

Apesar de a página não estar estruturada de forma semântica (faltam classes específicas como news-item ou post-title), ainda conseguimos capturar os dados corretamente graças às funções do Selenium:

- `find_elements` para localizar múltiplos itens;
- `find_element` dentro de cada card para extrair campos;
- `implicitly_wait` garantindo tempo de carregamento dinâmico.

---

## Boa prática: usando WebDriverWait

Embora `implicitly_wait` funcione em casos básicos, o mais robusto é usar `WebDriverWait` com `expected_conditions`. Assim, o script só avança quando o elemento realmente existir no DOM.

```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, 10)
cards = wait.until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.bg-gray-900 a"))
)[:5]
```

---

Esse exemplo mostra que Selenium em headless mode no Colab é totalmente viável para projetos educacionais, protótipos de scraping e validações rápidas.
Com ajustes simples em seletores e boas práticas de sincronização (WebDriverWait), é possível lidar com praticamente qualquer página moderna que dependa de JavaScript para exibir dados.
