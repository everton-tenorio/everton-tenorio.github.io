const n=`---
title: "Instalando EPSON L380 no Debian/Devuan Linux [PT-BR]"
date: 2025-06-10
slug: instalando-epson-l380-devuan-linux
description: ""
tags: ["EPSON L380", "Linux", "Debian", "Devuan"]
bannerImage: "https://i.ibb.co/ycQf9kJR/Chat-GPT-Image-10-de-jun-de-2025-02-36-09.png"
---

Agora um tutorial hard, nível sênior mesmo: L380 em um fork do Debian, coisas da vida.

--- 

### Instalando a EPSON l380 no Linux(Debian like)

Só pra garantir, instale via apt o driver ESC/P-R oficial da Epson, no Debian/Devuan o pacote que funciona melhor para L380 é o \`printer-driver-escpr\`, isso instala o filtro **epson-escpr** em **/usr/lib/cups/filter/**.

Depois faça o download do Driver(Epson Inkjet Printer Driver (ESC/P) for Linux) em [link - L380](http://download.ebz.epson.net/dsc/search/01/search/searchModule).

\`\`\`bash
sudo apt-get install printer-driver-escpr

sudo dpkg -i epson-inkjet-printer-201601w_1.0.1-1_amd64
\`\`\`

- Reinicie o CUPS: \`sudo service cups restart\`
- Acesse o serviço(CUPS): http://localhost:631
- Adicione a impressora \`Epson Inkjet Printer #1 (Epson Backend)\`, modelo \`EPSON L380 Series\`
- Imprima uma página teste

E espere. 

O resultado é a impressão da página teste, em cores e com informações do serviço e da impressora.
`;export{n as default};
